import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoireComponent } from './histoire/histoire.component';
import { ListePersosComponent } from './liste-persos/liste-persos.component';
import { CreationComponent } from './creation/creation.component';
import { FicheComponent } from './fiche/fiche.component';
import { UniversComponent } from './univers/univers.component';

const routes: Routes = [
  { path: '', redirectTo: '/univers', pathMatch: 'full' },
  // { path: 'histoire', component: HistoireComponent },
  { path: 'histoire/:id', component:  ListePersosComponent },
  { path: 'persos', component: ListePersosComponent },
  { path: 'histoire/:id/creationperso', component: CreationComponent },
  { path: 'persos/:id', component: FicheComponent },
  { path: 'univers/:id', component: HistoireComponent },
  { path: 'univers', component: UniversComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
