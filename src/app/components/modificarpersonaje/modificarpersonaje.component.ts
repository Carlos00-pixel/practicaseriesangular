import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';
import { Personajes } from 'src/app/models/personaje';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit {

  public series !: Array<Serie>;
  public personajes !: Array<Personajes>;

  @ViewChild("selectSeries") selectSeries !: ElementRef;
  @ViewChild("selectPersonajes") selectPersonajes !: ElementRef;

  constructor(
    private _serviceSeries: SeriesService,
    private _servicePersonajes: PersonajesService
    ) { }

  ngOnInit(): void {
    
    this._serviceSeries.getSeries().subscribe(response => {
      this.series = response;
    });

    this._servicePersonajes.getPersonajes().subscribe(response => {
      this.personajes = response;
    });
  }

}
