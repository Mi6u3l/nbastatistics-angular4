import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbaService } from '../../services/nba.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayersDetailsComponent implements OnInit {

  firstname: string
  lastname: string

  constructor(
    private route: ActivatedRoute,
    private nbaService: NbaService) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.getPlayerDetails(params['id']);
    });
  }

   getPlayerDetails(id) {
    this.nbaService.get(id)
      .subscribe((player) => {
        this.firstname = player.resultSets[0].rowSet[0][1];
        this.lastname = player.resultSets[0].rowSet[0][2];
      });
  }

}
