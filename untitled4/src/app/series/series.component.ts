import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SeriesService} from '../series.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})


export class SeriesComponent implements OnInit {
  title = 'My Application';
  showElement: any;

  constructor(private seriesService: SeriesService) { }

  mesSeries: Series[] =
    [
      new Series(1, 'Seinfeld', ['Jerry Seinfeld', 'Julia Louis-Dreyfus']),
      new Series(2, 'The Sopranos', ['James Gandolfini', 'Lorraine Bracco']),
      new Series(3, 'Friends', ['Jennifer Aniston', 'Courtney Cox', 'David Schwimmer']),
      new Series(4, 'Sillicon Valley', ['Martin Starr'])

    ];


  ngOnInit() {}

}


export class Series {

  constructor(private privateId: number, TvShow: string, actors: string[]) {
  this.id = privateId;
  this.TvShow = TvShow;
  this.actors = this.reformatString(actors);
  }
  id: number;
  TvShow: string;
  actors: string;


  reformatString(t: string[]): string {
    return t.sort(this.sortAlpha).join(' ; ');
  }

  sortAlpha(a: string, b: string): number {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;

  }






}


