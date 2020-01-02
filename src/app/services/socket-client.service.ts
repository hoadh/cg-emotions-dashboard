import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../../environments/environment';
import {Observable, Subscriber} from 'rxjs';
import {TodayStatistic} from './models/TodayStatistic';
import {RecentUpdate} from './models/RecentUpdate';

enum EVENTS {
  UPDATE_DASHBOARD = 'update dashboard',
  RECENT_USER = 'recent user'
}

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
      this.socket.on(EVENTS.UPDATE_DASHBOARD, (result) => {
        observer.next(result);
      });
    });
  }

  public onRecentUser() {
    return new Observable((observer: Subscriber<RecentUpdate>) => {
      this.socket.on(EVENTS.RECENT_USER, (result) => {
        observer.next(result);
      });
    });
  }
}
