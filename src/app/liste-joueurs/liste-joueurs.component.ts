import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueursService } from '../joueurs.service';

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css']
})
export class ListeJoueursComponent implements OnInit {

  joueurs = [];
  idpartie: number;

  constructor(
    private route: ActivatedRoute,
    private joueursService: JoueursService
  ) { }

  ngOnInit() {
    this.idpartie = +this.route.snapshot.paramMap.get('id');
    this.getJoueursByPartie(this.idpartie);
  }

  getJoueursByPartie(idpartie): void {
    if (!idpartie) { this.joueursService
      .getJoueurs()
      .subscribe(joueurs => this.joueurs = joueurs);
    } else {
      this.joueursService.getJoueursByPartie(idpartie)
        .subscribe(joueurs => this.joueurs = joueurs);
    }
  }

}
