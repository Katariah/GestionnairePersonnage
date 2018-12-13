import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoireComponent } from './histoire/histoire.component';
import { ListePersosComponent } from './liste-persos/liste-persos.component';
import { CreationComponent } from './creation/creation.component';
import { FicheComponent } from './fiche/fiche.component';

const routes: Routes = [
  { path: '', redirectTo: '/histoire', pathMatch: 'full' },
  { path: 'histoire', component: HistoireComponent },
  { path: 'histoire/:id', component:  ListePersosComponent },
  { path: 'persos', component: ListePersosComponent },
  { path: 'histoire/:id/creationperso', component: CreationComponent },
  { path: 'persos/:id', component: FicheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
