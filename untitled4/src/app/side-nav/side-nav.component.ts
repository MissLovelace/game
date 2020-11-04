import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})




export class SideNavComponent implements OnInit {
  @Input() pageDeux = false;
  @Input() pageTrois = false;
  @Input() pageFour = false;
  @Input() pageFive = false;

  private mess: string;
  constructor(private dataService: DataService) {
  }



  ngOnInit() {

    this.dataService.watchTwoWord().subscribe(message => {
      this.mess = message;


    });

    this.dataService.watchOneWord().subscribe(_ => {
      this.mess = null;

    });

    this.dataService.watchNumber().subscribe(_ => {
      this.mess = null;

    });


    this.dataService.watchNWord().subscribe(_ => {
      this.mess = null;

    });
  }


}
