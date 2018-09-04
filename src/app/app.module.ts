import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { HouseInfoComponent } from './house-info/house-info.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookInfoComponent,
    HouseInfoComponent,
    CharacterInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'character/:id', component:CharacterInfoComponent},
      {path:'book/:id', component:BookInfoComponent},
      {path:'house/:id', component:HouseInfoComponent},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
