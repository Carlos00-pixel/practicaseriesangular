import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

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
}