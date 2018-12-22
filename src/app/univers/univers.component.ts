import { Component, OnInit } from '@angular/core';
import { Univers } from '../univers';
import { UniversService } from '../univers.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-univers',
  templateUrl: './univers.component.html',
  styleUrls: ['./univers.component.css']
})

export class UniversComponent implements OnInit {

  univers: Univers[];
  myGroup: FormGroup = new FormGroup({ nomunivers: new FormControl() });
  idunivers: number;

  constructor(
    private universService: UniversService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUnivers();
    this.myGroup = this.formBuilder.group({ nomunivers: '' });
    this.idunivers = +this.route.snapshot.paramMap.get('id');
  }

  getUnivers(): void {
    this.universService.getUnivers().subscribe(univers => this.univers = univers);
  }

  addUnivers (name: String): void {
    name = this.myGroup.value.nomunivers;
    if (!name) { return; }
    this.universService.addUnivers
      ({ name: name } as Univers).subscribe(univers => {
        this.univers.push(univers);
      });
  }

  deleteHistoire (univers: Univers): void {
    this.universService.deleteUnivers(univers).subscribe(() => {
        this.universService.getUnivers().subscribe(univers => this.univers = univers);
      });
  }
}

