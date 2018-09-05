import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  public myId;
  public cardObj;
  constructor(public _route:ActivatedRoute, public router:Router, public gotHttpService:GotHttpService) { }

  ngOnInit() {
    this.myId=this._route.snapshot.paramMap.get('id');
    this.gotHttpService.getAllBooks().subscribe(
      res=>this.cardObj=res
    )
  }

}
