import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur';
import { JoueursService } from '../joueurs.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  joueur: Joueur = new Joueur();
  nouveauJoueurForm = new FormGroup({
    name: new FormControl(''),
    sexe: new FormControl(''),
    taille: new FormControl(''),
    poids: new FormControl(''),
    photo: new FormControl(''),
    classe: new FormControl(''),
    race: new FormControl(''),
    intelligence: new FormControl(''),
    force: new FormControl(''),
    dexterite: new FormControl(''),
    constitution: new FormControl(''),
    chance: new FormControl(''),
    note: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private joueursService: JoueursService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.joueur.idhistoire = +this.route.snapshot.paramMap.get('id');
  }

  addJoueur() {
    if (this.nouveauJoueurForm.valid) {
      const joueur = this.nouveauJoueurForm.value;
      joueur.idhistoire = this.joueur.idhistoire;
      this.joueursService.addJoueur(joueur).subscribe(
        _ => this.router.navigate([`histoire/${this.joueur.idhistoire}`]),
        error => console.log(error)
      );
    }
  }
}
