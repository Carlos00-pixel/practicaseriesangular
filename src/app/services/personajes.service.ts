import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Personajes } from "../models/personaje";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class PersonajesService {
    constructor(private _http: HttpClient) {}

    getPersonajes(): Observable<any> {
        var request = "/api/Personajes";
        var url = environment.urlApiSeriesPersonajes + request;

        return this._http.get(url);
    }

    getPersonajeDetails(id: number): Observable<any>{
        var request = "/api/Series/PersonajesSerie/"+id;
        var url = environment.urlApiSeriesPersonajes + request;

        return this._http.get(url);
    }

    insertPersonaje(personaje: Personajes): Observable<any> {

        var json = JSON.stringify(personaje);
        var header = new HttpHeaders().set('Content-Type', 'application/json');

        var request = "/api/Personajes";
        var url = environment.urlApiSeriesPersonajes + request;

        return this._http.post(url, json, {headers: header});
    }

    editPersonaje(idPersonaje: number, idSerie: number): Observable<any> {

        var json = JSON.stringify({idPersonaje, idSerie});
        var header = new HttpHeaders().set('Content-Type', 'application/json');

        var request = "/api/Personajes/"+idPersonaje+"/"+idSerie;

        var url = environment.urlApiSeriesPersonajes + request;

        return this._http.put(url, 0, {headers: header});
    }

    getPersonajesSeleccionados(id: number): Observable<any> {
        var request = "/api/Personajes/"+id;
        var url = environment.urlApiSeriesPersonajes + request;

        return this._http.get(url);
    }
}