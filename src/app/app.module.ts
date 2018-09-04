import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { HouseInfoComponent } from './house-info/house-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookInfoComponent,
    HouseInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
