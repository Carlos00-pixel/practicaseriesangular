import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//SERVICIOS
import { SeriesService } from './services/series.service';
import { PersonajesService } from './services/personajes.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetallesseriesComponent } from './components/detallesseries/detallesseries.component';
import { DetallespersonajesComponent } from './components/detallespersonajes/detallespersonajes.component';
import { InsertarpersonajeComponent } from './components/insertarpersonaje/insertarpersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetallesseriesComponent,
    DetallespersonajesComponent,
    InsertarpersonajeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    appRoutingProviders, 
    SeriesService, 
    PersonajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
