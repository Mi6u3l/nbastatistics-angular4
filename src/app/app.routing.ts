import { Routes } from '@angular/router';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayersDetailsComponent } from './components/players-details/players-details.component';

export const routes: Routes = [
  { path: '', component: PlayersListComponent },
  { path: 'player/:id', component: PlayersDetailsComponent }
];