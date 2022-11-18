import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';
import { Personajes } from 'src/app/models/personaje';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit {

  public series !: Array<Serie>;
  public personajes !: Array<Personajes>;

  public serieSelect !: Serie;
  public personajesSelect !: Personajes;

  @ViewChild("selectSeries") selectSeries !: ElementRef;
  @ViewChild("selectPersonajes") selectPersonajes !: ElementRef;

  constructor(
    private _serviceSeries: SeriesService,
    private _servicePersonajes: PersonajesService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    
    this._serviceSeries.getSeries().subscribe(response => {
      this.series = response;
    });

    this._servicePersonajes.getPersonajes().subscribe(response => {
      this.personajes = response;
    });
  }

  updatePersonaje(): void {
    var idSerie = parseInt(this.selectSeries.nativeElement.value);
    var idPersonaje = parseInt(this.selectPersonajes.nativeElement.value);

    this._servicePersonajes.editPersonaje(idPersonaje, idSerie).subscribe(response => {
      this._router.navigate(["/personajes/"+idSerie]);
    });
  }

  mostrarSerieSeleccionada(): void {
    var idSerie = parseInt(this.selectSeries.nativeElement.value);

    this._serviceSeries.getSeriesSeleccionada(idSerie).subscribe(response => {
      this.serieSelect = response;
      console.log(response);
    });
  }

  mostrarPersonajesSeleccionados(): void {
    var idPersonaje = parseInt(this.selectPersonajes.nativeElement.value);

    this._servicePersonajes.getPersonajesSeleccionados(idPersonaje).subscribe(response => {
      this.personajesSelect = response;
      console.log(response);

    });
  }

}
