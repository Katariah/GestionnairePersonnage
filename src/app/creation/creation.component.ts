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
