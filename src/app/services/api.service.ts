import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpResult} from './types/http-result';
import {TodayStatistic} from './models/TodayStatistic';
import {environment} from '../../environments/environment';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getTodayEmotions(): Observable<HttpResult<TodayStatistic>> {
    return this.httpClient.get<HttpResult<TodayStatistic>>(`${apiUrl}today`);
  }
}
