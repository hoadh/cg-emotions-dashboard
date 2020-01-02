import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../../environments/environment';
import {Observable, Subscriber} from 'rxjs';
import {HttpResult} from './types/http-result';
import {TodayStatistic} from './models/TodayStatistic';

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {
  private url = environment.apiUrl;
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public onUpdateDashboard() {
    return new Observable((observer: Subscriber<TodayStatistic>) => {
      this.socket.on('update dashboard', (result) => {
        observer.next(result);
      });
    });
  }
}
