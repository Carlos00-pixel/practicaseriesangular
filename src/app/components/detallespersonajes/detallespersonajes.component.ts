import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personaje';
import { PersonajesService } from 'src/app/services/personajes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detallespersonajes',
  templateUrl: './detallespersonajes.component.html',
  styleUrls: ['./detallespersonajes.component.css']
})
export class DetallespersonajesComponent implements OnInit {

  public personajes !: Array<Personajes>;

  public id!:number;

  constructor(
    private _service: PersonajesService,
    private _activeRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( parametros: Params ) => { 
    
      if (parametros['id'] != null){
      
        this.id = parseInt(parametros['id']);

        console.log(this.id);

        this._service.getPersonajeDetails(this.id).subscribe(response => {
          this.personajes = response;
        });
      
      } 
      
    }); 
  }

}
