import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02VariablesDePlatillaComponent } from './cmp02-variables-de-platilla/cmp02-variables-de-platilla.component';
import { ReproductorComponent } from './cmp02-variables-de-platilla/reproductor/reproductor.component';
import { Cmp03InputYOutputComponent } from './cmp03-input-y-output/cmp03-input-y-output.component';
import { SugusComponent } from './cmp03-input-y-output/sugus/sugus.component';
import { MiBotonComponent } from './cmp03-input-y-output/mi-boton/mi-boton.component';
import { LukeComponent } from './cmp03-input-y-output/luke/luke.component';
import { LeiaComponent } from './cmp03-input-y-output/leia/leia.component';
import { Cmp04DirectivasComponent } from './cmp04-directivas/cmp04-directivas.component';
import { MarcarDirective } from './cmp04-directivas/marcar.directive';
import { PowerModeDirective } from './cmp04-directivas/power-mode.directive';
import { Cmp05PipesComponent } from './cmp05-pipes/cmp05-pipes.component';
import { DoblePipe } from './cmp05-pipes/pipes/doble.pipe';
import { FiltroPipe } from './cmp05-pipes/pipes/filtro.pipe';
import { ReversePipe } from './cmp05-pipes/pipes/reverse.pipe';
import { OcultarPalabrasPipe } from './cmp05-pipes/pipes/ocultar-palabras.pipe';
import { Cmp06FormulariosComponent } from './cmp06-formularios/cmp06-formularios.component';
import { DePlantillaComponent } from './cmp06-formularios/de-plantilla/de-plantilla.component';
import { ReactivoComponent } from './cmp06-formularios/reactivo/reactivo.component';
import { ErrorComponent } from './cmp06-formularios/error/error.component';
import { Cmp07ServiciosComponent } from './cmp07-servicios/cmp07-servicios.component';
import { CmpAComponent } from './cmp07-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp07-servicios/cmp-b/cmp-b.component';
import { Cmp08ObservablesComponent } from './cmp08-observables/cmp08-observables.component';
import { SuscripcionComponent } from './cmp08-observables/suscripcion/suscripcion.component';
import { FechaActualComponent } from './cmp08-observables/fecha-actual/fecha-actual.component';
import { Cmp09HttpComponent } from './cmp09-http/cmp09-http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TareasService } from './cmp09-http/services/tareas.service';
import { LogInterceptor } from './cmp09-http/interceptors/log.interceptor';
import { AuthInterceptor } from './cmp09-http/interceptors/auth.interceptor';
import { Cmp10AutenticacionComponent } from './cmp10-autenticacion/cmp10-autenticacion.component';
import { InicioComponent } from './cmp11-routing/inicio/inicio.component';
import { NuevoUsuarioComponent } from './cmp11-routing/nuevo-usuario/nuevo-usuario.component';
import { InfoUsuarioComponent } from './cmp11-routing/info-usuario/info-usuario.component';
import { Error404Component } from './cmp11-routing/error404/error404.component';
import { Cmp11RoutingComponent } from './cmp11-routing/cmp11-routing.component';
import { RoutingModule } from './cmp11-routing/app.routes';
import { EditarUsuarioComponent } from './cmp11-routing/editar-usuario/editar-usuario.component';
import { Cmp12ModulosYLazyLoadingComponent } from './cmp12-modulos-y-lazy-loading/cmp12-modulos-y-lazy-loading.component';
import { TarjetasCreditoModule } from './tarjetas-credito/tarjetas-credito.module';
import { Cmp13InternacionalizacionComponent } from './cmp13-internacionalizacion/cmp13-internacionalizacion.component';
import { Cmp14TestingComponent } from './cmp14-testing/cmp14-testing.component';
import { LogueadoComponent } from './cmp14-testing/logueado/logueado.component';
@NgModule({
  declarations: [
    AppComponent,
    Cmp01DataBindingComponent,
    Cmp02VariablesDePlatillaComponent,
    ReproductorComponent,
    Cmp03InputYOutputComponent,
    SugusComponent,
    MiBotonComponent,
    LukeComponent,
    LeiaComponent,
    Cmp04DirectivasComponent,
    MarcarDirective,
    PowerModeDirective,
    Cmp05PipesComponent,
    DoblePipe,
    FiltroPipe,
    ReversePipe,
    OcultarPalabrasPipe,
    Cmp06FormulariosComponent,
    DePlantillaComponent,
    ReactivoComponent,
    ErrorComponent,
    Cmp07ServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    Cmp08ObservablesComponent,
    SuscripcionComponent,
    FechaActualComponent,
    Cmp09HttpComponent,
    Cmp10AutenticacionComponent,
    InicioComponent,
    NuevoUsuarioComponent,
    InfoUsuarioComponent,
    Error404Component,
    Cmp11RoutingComponent,
    EditarUsuarioComponent,
    Cmp12ModulosYLazyLoadingComponent,
    Cmp13InternacionalizacionComponent,
    Cmp14TestingComponent,
    LogueadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    // TarjetasCreditoModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
