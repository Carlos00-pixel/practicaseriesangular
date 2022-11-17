import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-insertarpersonaje',
  templateUrl: './insertarpersonaje.component.html',
  styleUrls: ['./insertarpersonaje.component.css']
})
export class InsertarpersonajeComponent implements OnInit {

  public series !: Array<Serie>;

  @ViewChild("cajanombre") cajanombre !: ElementRef;
  @ViewChild("cajaimagen") cajaimagen !: ElementRef;
  @ViewChild("selectseries") selectseries !: ElementRef;

  constructor(private _service: SeriesService) { }

  ngOnInit(): void {
    this._service.getSeries().subscribe(response => {
      this.series = response;
    });
  }

}
