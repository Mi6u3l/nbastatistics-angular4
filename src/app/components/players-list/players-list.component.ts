import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbaService } from '../../services/nba.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PlayersListComponent implements OnInit {

  players: Array<object>

  constructor(private nbaService: NbaService) { }

 
  ngOnInit() {
    this.nbaService.getList()
      .subscribe((players) => {
        console.log(players);
        this.players = players;
      });
  }

}
