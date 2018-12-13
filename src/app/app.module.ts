import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoireComponent } from './histoire/histoire.component';

import { FormsModule } from '@angular/forms';
import { ListePersosComponent } from './liste-persos/liste-persos.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FicheComponent } from './fiche/fiche.component';
import { CreationComponent } from './creation/creation.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoireComponent,
    ListePersosComponent,
    FicheComponent,
    CreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
