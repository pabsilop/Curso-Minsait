import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaVendehumosComponent } from './lista-vendehumos/lista-vendehumos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVendehumosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
