import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartieComponent } from './partie/partie.component';
import { ListeJoueursComponent } from './liste-joueurs/liste-joueurs.component';
import { CreationComponent } from './creation/creation.component';
import { FicheComponent } from './fiche/fiche.component';

const routes: Routes = [
  { path: '', redirectTo: '/partie', pathMatch: 'full' },
  { path: 'partie', component: PartieComponent },
  { path: 'partie/:id', component:  ListeJoueursComponent },
  { path: 'joueurs', component: ListeJoueursComponent },
  { path: 'partie/:id/creationjoueur', component: CreationComponent },
  { path: 'joueurs/:id', component: FicheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
