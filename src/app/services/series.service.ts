import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class SeriesService {
    constructor(private _http: HttpClient) {}

    getSeries(): Observable<any> {
        var request = "/api/Series";
        var url = environment.urlApiSeriesPersonajes + request;

        return this._http.get(url);
    }

    getSeriesDetails(id: number): Observable<any> {
        var request = "/api/Series/"+id;
        var url = environment.urlApiSeriesPersonajes + request;

        return this._http.get(url);
    }
}