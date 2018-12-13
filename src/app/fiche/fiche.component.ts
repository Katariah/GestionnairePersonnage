import { Component, OnInit } from '@angular/core';
import { Perso } from '../perso';
import { PersosService } from '../persos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  perso: Perso;
  id: number;

  constructor(private persosService: PersosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.persosService.persoSelected$.subscribe(
      perso => this.perso = perso);
  }

  deletePerso(perso: Perso): void {
    this.persosService.deletePerso(perso).subscribe(() => {
      this.perso = null;
      this.persosService.informUpdatedList();
    });
  }

  editPerso(perso: Perso) {
    this.persosService.updatePerso(perso).subscribe(
      persoup => this.perso = persoup);
  }
}

