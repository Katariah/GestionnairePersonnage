import { Component, OnInit } from '@angular/core';
import { Partie } from '../partie';
import { PartieService } from '../partie.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})

export class PartieComponent implements OnInit {

  parties: Partie[];
  myGroup: FormGroup = new FormGroup({ nompartie: new FormControl() });
  idpartie: number;

  constructor(
    private partieService: PartieService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParties();
    this.myGroup = this.formBuilder.group({ nompartie: '' });
    this.idpartie = +this.route.snapshot.paramMap.get('id');
  }

  getParties(): void {
    this.partieService.getParties().subscribe(parties => this.parties = parties);
  }

  addPartie(name: String): void {
    name = this.myGroup.value.nompartie;
    if (!name) { return; }
    this.partieService.addPartie({ name: name } as Partie)
      .subscribe(partie => {
        this.parties.push(partie);
      });
  }

  deletePartie(partie: Partie): void {
    this.partieService.deletePartie(partie).subscribe(() => {
      this.partieService.getParties().subscribe(parties => this.parties = parties);
    });
  }
}

