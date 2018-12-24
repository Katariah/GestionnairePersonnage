import { Component, OnInit } from '@angular/core';
import { Perso } from '../perso';
import { PersosService } from '../persos.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  perso: Perso = new Perso();
  nouveauPersoForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    sexe: new FormControl(''),
    carrure: new FormControl(''),
    peau: new FormControl(''),
    cheveux: new FormControl(''),
    yeux: new FormControl(''),
    style: new FormControl(''),
    qualites: new FormControl(''),
    defauts: new FormControl(''),
    caractere: new FormControl(''),
    ambition: new FormControl(''),
    competences: new FormControl(''),
    richesse: new FormControl(''),
    statut: new FormControl(''),
    emploi: new FormControl(''),
    habitat: new FormControl(''),
    famille: new FormControl(''),
    amis: new FormControl(''),
    amour: new FormControl(''),
    animaux: new FormControl(''),
    naissance: new FormControl(''),
    passe: new FormControl(''),
    realisations: new FormControl(''),
    voyages: new FormControl(''),
    autre: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private persosService: PersosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.perso.idhistoire = +this.route.snapshot.paramMap.get('id');
  }

  addPerso() {
    if (this.nouveauPersoForm.valid) {
      const perso = this.nouveauPersoForm.value;
      perso.idhistoire = this.perso.idhistoire;
      this.persosService.addPerso(perso).subscribe(
        _ => this.router.navigate([`histoire/${this.perso.idhistoire}`]),
        error => console.log(error)
      );
    }
  }
}
