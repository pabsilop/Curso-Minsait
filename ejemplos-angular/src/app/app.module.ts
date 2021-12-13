import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02VariablesDePlatillaComponent } from './cmp02-variables-de-platilla/cmp02-variables-de-platilla.component';
import { ReproductorComponent } from './cmp02-variables-de-platilla/reproductor/reproductor.component';
import { Cmp03InputYOutputComponent } from './cmp03-input-y-output/cmp03-input-y-output.component';
import { SugusComponent } from './cmp03-input-y-output/sugus/sugus.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp01DataBindingComponent,
    Cmp02VariablesDePlatillaComponent,
    ReproductorComponent,
    Cmp03InputYOutputComponent,
    SugusComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
