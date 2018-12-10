import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur';
import { JOUEURS } from '../mock-joueurs';

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css']
})
export class ListeJoueursComponent implements OnInit {

  joueurs = JOUEURS;

  constructor() { }

  ngOnInit() {
  }

  getJoueursByPartie(idpartie): 

}
