import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersosService } from '../persos.service';
import { Perso } from '../perso';

@Component({
  selector: 'app-liste-persos',
  templateUrl: './liste-persos.component.html',
  styleUrls: ['./liste-persos.component.css']
})
export class ListePersosComponent implements OnInit {

  persos = [];
  idhistoire: number;
  selectedPerso: Perso;
  id: number;
  perso: Perso;

  constructor(
    private route: ActivatedRoute,
    private persosService: PersosService
  ) { }

  ngOnInit() {
    this.idhistoire = +this.route.snapshot.paramMap.get('id');
    this.getPersosByHistoire(this.idhistoire);
    this.persosService.listeModifiee$.subscribe(
      () => this.getPersosByHistoire(this.idhistoire));
  }

  getPersosByHistoire(idhistoire): void {
    if (!idhistoire) {
      this.persosService
      .getPersos()
      .subscribe(persos => this.persos = persos);
    } else {
      this.persosService.getPersosByHistoire(idhistoire)
        .subscribe(persos => this.persos = persos);
    }
  }

  onSelect(perso: Perso): void {
    this.persosService.selectPerso(perso);
  }

}
