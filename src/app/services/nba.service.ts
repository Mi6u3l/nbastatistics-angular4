import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NbaService {
  BASE_URL: string = 'https://stats.nba.com/stats';

  constructor(
    private http: Http
  ) { }

  handleError(e) {
    return Observable.throw(e.message);
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/leaguedashplayerbiostats?PerMode=Totals&LeagueID=00&Season=2016-17&SeasonType=Regular Season`)
      .map((res) => res.json())
      .catch(this.handleError);
  }

   get(id) {
    return this.http.get(`${this.BASE_URL}/commonplayerinfo?PlayerID=${id}`)
      .map((res) => res.json())
      .catch(this.handleError);
  }
}
