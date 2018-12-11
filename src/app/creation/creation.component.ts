import { Component, OnInit } from '@angular/core';
import { Joueur } from '../joueur';
import { JoueursService } from '../joueurs.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  joueur: Joueur = new Joueur();

  constructor(private formBuilder: FormBuilder, private joueursService: JoueursService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.joueur.idpartie = +this.route.snapshot.paramMap.get('id');
  }

  addJoueur(joueur) {
    this.joueursService.addJoueur(joueur).subscribe(
      _ => this.router.navigate(['/partie']),
      error => console.log(error)
    );
  }
}

