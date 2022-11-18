import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';
import { Personajes } from 'src/app/models/personaje';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertarpersonaje',
  templateUrl: './insertarpersonaje.component.html',
  styleUrls: ['./insertarpersonaje.component.css']
})
export class InsertarpersonajeComponent implements OnInit {

  public series !: Array<Serie>;

  @ViewChild("cajanombre") cajaNombre !: ElementRef;
  @ViewChild("cajaimagen") cajaImagen !: ElementRef;
  @ViewChild("selectseries") selectSeries !: ElementRef;

  constructor(
    private _service: SeriesService,
    private _servicePersonajes: PersonajesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._service.getSeries().subscribe(response => {
      this.series = response;
    });
  }

  insertarPersonaje(): void {
    var nom = this.cajaNombre.nativeElement.value;
    var imagen = this.cajaImagen.nativeElement.value;
    var idSerie = parseInt(this.selectSeries.nativeElement.value);
    var newDept = new Personajes(0, nom, imagen, idSerie);

    this._servicePersonajes.insertPersonaje(newDept).subscribe(response => {
      this._router.navigate(["/"]);
    })
  }

}
