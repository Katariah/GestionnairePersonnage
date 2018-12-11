import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur';
import { JoueursService } from '../joueurs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  joueur: Joueur;
  id: number;

  constructor(private joueursService: JoueursService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.joueursService.joueurSelected$.subscribe(
      joueur => this.joueur = joueur);
  }

  deleteJoueur(joueur: Joueur): void {
    this.joueursService.deleteJoueur(joueur).subscribe(() => {
      this.joueur = null;
      this.joueursService.informUpdatedList();
    });
  }

  editJoueur(joueur: Joueur) {
    this.joueursService.updateJoueur(joueur).subscribe(
      joueurup => this.joueur = joueurup);
  }
}

