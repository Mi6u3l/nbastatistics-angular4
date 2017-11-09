import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { NbaService } from './services/nba.service';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './components/players-list/players-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [
    NbaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
