import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueursService } from '../joueurs.service';
import { Joueur } from '../joueur';

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css']
})
export class ListeJoueursComponent implements OnInit {

  joueurs = [];
  idhistoire: number;
  selectedJoueur: Joueur;
  id: number;
  joueur: Joueur;

  constructor(
    private route: ActivatedRoute,
    private joueursService: JoueursService
  ) { }

  ngOnInit() {
    this.idhistoire = +this.route.snapshot.paramMap.get('id');
    this.getJoueursByHistoire(this.idhistoire);
    this.joueursService.listeModifiee$.subscribe(
      () => this.getJoueursByHistoire(this.idhistoire));
  }

  getJoueursByHistoire(idhistoire): void {
    if (!idhistoire) {
      this.joueursService
      .getJoueurs()
      .subscribe(joueurs => this.joueurs = joueurs);
    } else {
      this.joueursService.getJoueursByHistoire(idhistoire)
        .subscribe(joueurs => this.joueurs = joueurs);
    }
  }

  onSelect(joueur: Joueur): void {
    this.joueursService.selectJoueur(joueur);
  }

}
