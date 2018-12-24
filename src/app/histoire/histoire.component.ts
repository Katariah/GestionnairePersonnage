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
  idunivers: number;
  histoire: Histoire;
  boolId: boolean = true;

  constructor(
    private histoireService: HistoireService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.idunivers = +this.route.snapshot.paramMap.get('id');
    this.getHistoirebyUnivers(this.idunivers);
    this.myGroup = this.formBuilder.group({ nomhistoire: '' });
    // this.idhistoire = +this.route.snapshot.paramMap.get('id');
    this.verifId();
    
  }

  getHistoirebyUnivers(idunivers): void {
    if (!idunivers) {
      this.histoireService
        .getHistoires()
        .subscribe(histoires => this.histoires = histoires);
    } else {
      this.histoireService.getHistoirebyUnivers(idunivers)
        .subscribe(histoires => this.histoires = histoires);
    }
  }

  addHistoire(name: String) {
    name = this.myGroup.value.nomhistoire;
    if (!name) { return; }
    // this.histoire.idunivers = this.idunivers;
    this.histoireService.addHistoire(({ name: name, idunivers: this.idunivers } as Histoire)).subscribe(histoire => {
      this.histoires.push(histoire);
    });
  }

deleteHistoire(histoire: Histoire): void {
  this.histoireService.deleteHistoire(histoire).subscribe(() => {
    this.histoireService.getHistoirebyUnivers(this.idunivers).subscribe(histoires => this.histoires = histoires);
  });
}

verifId(): boolean{
  if (!this.idunivers) {
    this.boolId = false;
  }
  return this.boolId 
}

}

