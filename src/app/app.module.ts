import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { NbaService } from './services/nba.service';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayersDetailsComponent } from './components/players-details/players-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayersDetailsComponent
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
