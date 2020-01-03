import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpResult} from './types/http-result';
import {TodayStatistic} from './models/TodayStatistic';
import {environment} from '../../environments/environment';
import {RecentUpdate} from './models/RecentUpdate';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getTodayEmotions(): Observable<HttpResult<TodayStatistic>> {
    return this.httpClient.get<HttpResult<TodayStatistic>>(`${apiUrl}today`);
  }

  getRecentEmotions(): Observable<HttpResult<RecentUpdate[]>> {
    return this.httpClient.get<HttpResult<RecentUpdate[]>>(`${apiUrl}recents`);
  }

  getAllRecentUpdates(): Observable<HttpResult<RecentUpdate[]>> {
    return this.httpClient.get<HttpResult<RecentUpdate[]>>(`${apiUrl}recents?limit=100`);
  }
}
