import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';
import { ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public series !: Array<Serie>

  constructor(
    private _service: SeriesService
    ) {}

  ngOnInit(): void {

    this._service.getSeries().subscribe(response => {
      this.series = response;
    });
  }

}
