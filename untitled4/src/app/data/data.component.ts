import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {HeaderService} from '../header/header.service';


export interface MovieTab {
  id: number;
  movie: string;
  director: string;
  sortie: number;
  award: boolean;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']

})

export class DataComponent implements OnInit {

  constructor(private dataService: DataService, private headerService: HeaderService ) {
  }

  private filmsService: any;

  title = 'Datas';
  movie: string;
  private result: string;

  displayedColumns: string[] = ['id', 'movie', 'director', 'sortie', 'award'];

  private movies: MovieTab[] = [

    {
      id: 1,
      movie: '2001 - A Space Odyssey',
      director: 'Stanley Kubrick',
      sortie: 1968,
      award: false
    },

    {
      id: 2,
      movie: 'Children of Men',
      director: 'Alfonso Cuaron',
      sortie: 2006,
      award: true
    },

    {
      id: 3,
      movie: 'Aliens',
      director: 'James Cameron',
      sortie: 1986,
      award: true

    },

    {
      id: 4,
      movie: 'The Shining',
      director: 'Stanley Kubrick',
      sortie: 1980,
      award: false

    }

    ];

  dataSource = new MatTableDataSource(this.movies);


message: '';


  setMovie(movieTab: MovieTab) {
    this.filmsService.movie = movieTab.movie;

    this.movie = movieTab.movie;
  }

  onClickHere() {


    console.log(this.message);
  }





ngOnInit(): void {
  this.dataService.watchNumber().subscribe(message => {
    this.result = message.toString();

  });
  this.dataService.watchOneWord().subscribe(_ => {
    this.result = null;

  });


  this.dataService.watchTwoWord().subscribe(_ => {
    this.result = null;

  });

  this.dataService.watchNWord().subscribe(_ => {
    this.result = this.message;
  });


}


}

