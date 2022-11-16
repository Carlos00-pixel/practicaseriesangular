import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';
import { ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-detallesseries',
  templateUrl: './detallesseries.component.html',
  styleUrls: ['./detallesseries.component.css']
})
export class DetallesseriesComponent implements OnInit {
  public serie !: Serie

  public id!:number;

  constructor(
    private _service: SeriesService,
    private _activeRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this._activeRoute.params.subscribe(( parametros: Params ) => { 
    
      if (parametros['idSerie'] != null){
      
        this.id = parseInt(parametros['idSerie']);

        this._service.getSeriesDetails(this.id).subscribe(response => {
          this.serie = response;
        });
      
      } 
      
    }); 
  }

}
