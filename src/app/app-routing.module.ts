import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartieComponent } from './partie/partie.component';
import { ListeJoueursComponent } from './liste-joueurs/liste-joueurs.component';

const routes: Routes = [
  { path: '', redirectTo: '/partie', pathMatch: 'full' },
  { path: 'partie', component: PartieComponent },
  // { path: 'joueur/:id', component:  },
  { path: 'joueurs', component: ListeJoueursComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
