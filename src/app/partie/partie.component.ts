import { Component, OnInit } from '@angular/core';
import { Partie } from '../partie';
import { PartieService } from '../partie.service';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})

export class PartieComponent implements OnInit {

  parties: Partie[];

  constructor(private partieService: PartieService) { }

  ngOnInit() {
    this.getParties();
  }

  getParties(): void {
    this.partieService.getParties().subscribe(parties => this.parties = parties);
  }

}
