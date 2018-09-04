import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books;

  constructor(public gotHttpService:GotHttpService) { }

  ngOnInit() {
    this.gotHttpService.getAllBooks().subscribe(
             res=>this.books=res
        ) 
  }
  // public getbooks = ():any=>{
  //   return ( 
  //     this.gotHttpService.getAllBooks().subscribe(
  //       data => data,
  //       error => error
  //   ) )
  // }
  public getHouses = ():any=>{
    this.gotHttpService.getAllHouses().subscribe(
      data => { console.log(data) },
      error => {}
    )
  }
  public getCharacters = ():any=>{
    this.gotHttpService.getAllCharacters().subscribe(
      data => { console.log(data) },
      error => {}
    )
  }

}
