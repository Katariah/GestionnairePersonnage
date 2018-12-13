import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoireComponent } from './histoire/histoire.component';
import { ListeJoueursComponent } from './liste-joueurs/liste-joueurs.component';
import { CreationComponent } from './creation/creation.component';
import { FicheComponent } from './fiche/fiche.component';

const routes: Routes = [
  { path: '', redirectTo: '/histoire', pathMatch: 'full' },
  { path: 'histoire', component: HistoireComponent },
  { path: 'histoire/:id', component:  ListeJoueursComponent },
  { path: 'joueurs', component: ListeJoueursComponent },
  { path: 'histoire/:id/creationjoueur', component: CreationComponent },
  { path: 'joueurs/:id', component: FicheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
