import { Component, OnInit } from '@angular/core';
import { Partie } from '../partie';
import { PartieService } from '../partie.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})

export class PartieComponent implements OnInit {

  parties: Partie[];
  myGroup: FormGroup = new FormGroup({ nompartie: new FormControl() });

  constructor(
    private partieService: PartieService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.getParties();
    this.myGroup = this.formBuilder.group({
      nompartie: ''
    });
  }

  getParties(): void {
    this.partieService.getParties().subscribe(parties => this.parties = parties);
  }

  addPartie(nompartie: String): void {
    nompartie = this.myGroup.value.nompartie;
    if (!nompartie) { return; }
    this.partieService.addPartie({ namepartie: nompartie } as Partie)
      .subscribe(partie => {
        this.parties.push(partie);
      });
  }
}

