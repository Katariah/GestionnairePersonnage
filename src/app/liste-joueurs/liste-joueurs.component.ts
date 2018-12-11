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
  idpartie: number;
  selectedJoueur: Joueur;
  id: number;
  joueur: Joueur;

  constructor(
    private route: ActivatedRoute,
    private joueursService: JoueursService
  ) { }

  ngOnInit() {
    this.idpartie = +this.route.snapshot.paramMap.get('id');
    this.getJoueursByPartie(this.idpartie);
    this.joueursService.listeModifiee$.subscribe(
      () => this.getJoueursByPartie(this.idpartie));
  }

  getJoueursByPartie(idpartie): void {
    if (!idpartie) {
      this.joueursService
      .getJoueurs()
      .subscribe(joueurs => this.joueurs = joueurs);
    } else {
      this.joueursService.getJoueursByPartie(idpartie)
        .subscribe(joueurs => this.joueurs = joueurs);
    }
  }

  onSelect(joueur: Joueur): void {
    this.joueursService.selectJoueur(joueur);
  }

}
