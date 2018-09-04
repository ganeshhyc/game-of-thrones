import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public gotHttpService:GotHttpService) { }

  ngOnInit() {
  }
  public getbooks = ():any=>{
    this.gotHttpService.getAllBooks().subscribe(
      data => { console.log(data)},
      error => {  }
    )
  }

}
