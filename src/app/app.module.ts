import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { SeriesService } from './services/series.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetallesseriesComponent } from './components/detallesseries/detallesseries.component';
import { DetallespersonajesComponent } from './components/detallespersonajes/detallespersonajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetallesseriesComponent,
    DetallespersonajesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders, SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
