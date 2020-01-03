import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {ApexOptions} from 'ng-apexcharts';
import {TodayStatistic} from './services/models/TodayStatistic';
import {SocketClientService} from './services/socket-client.service';
import {RecentUpdate} from './services/models/RecentUpdate';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
