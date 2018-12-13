import { Component, OnInit } from '@angular/core';
import { Histoire } from '../histoire';
import { HistoireService } from '../histoire.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})

export class HistoireComponent implements OnInit {

  histoires: Histoire[];
  myGroup: FormGroup = new FormGroup({ nomhistoire: new FormControl() });
  idhistoire: number;

  constructor(
    private histoireService: HistoireService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHistoires();
    this.myGroup = this.formBuilder.group({ nomhistoire: '' });
    this.idhistoire = +this.route.snapshot.paramMap.get('id');
  }

  getHistoires(): void {
    this.histoireService.getHistoires().subscribe(histoires => this.histoires = histoires);
  }

  addHistoire (name: String): void {
    name = this.myGroup.value.nomhistoire;
    if (!name) { return; }
    this.histoireService.addHistoire
      ({ name: name } as Histoire).subscribe(histoire => {
        this.histoires.push(histoire);
      });
  }

  deleteHistoire (histoire: Histoire): void {
    this.histoireService.deleteHistoire(histoire).subscribe(() => {
        this.histoireService.getHistoires().subscribe(histoires => this.histoires = histoires);
      });
  }
}

