import { Component, OnInit } from '@angular/core';
import {ApexOptions} from 'ng-apexcharts';
import {RecentUpdate} from '../services/models/RecentUpdate';
import {ApiService} from '../services/api.service';
import {SocketClientService} from '../services/socket-client.service';
import {TodayStatistic} from '../services/models/TodayStatistic';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading = true;

  options: ApexOptions = {
    title: {
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize:  '36px',
        color:  '#263238'
      },
    },
    noData: {
      text: 'Chưa có dữ liệu thống kê'
    },
    chart: {
      type: 'donut',
      width: '50%',
    },
    series: [],
    labels: [],
    colors: [],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
  recentUpdates: RecentUpdate[];
  constructor(private commonService: CommonService,
              private apiService: ApiService,
              private socketClientService: SocketClientService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.updateLabels();
    this.updateColors();
    this.apiService.getTodayEmotions().subscribe( result => this.updateDashboard(result.data, "apiService.getTodayEmotions"));
    this.apiService.getRecentEmotions().subscribe( result => this.recentUpdates = result.data);
    this.socketClientService.onUpdateDashboard().subscribe( result => this.updateDashboard(result, "socketClientService.onUpdateDashboard"));
    this.socketClientService.onRecentUser().subscribe( result => {
      while (this.recentUpdates.length > 50) {
        this.recentUpdates.pop();
      }
      this.recentUpdates.unshift(result);
    });
  }

  updateDashboard(result: TodayStatistic, source: string) {
    console.log("updateDashboard", source);
    if (result) {
      this.options.series = result.series;
      // this.updateLabelsWithSeries(result.series);
      this.isLoading = false;
    }
  }

  updateLabelsWithSeries(series) {
    let labels = this.commonService.getChartLabels().map( (label, i) => {
      return label + ' (' + series[i] + ')';
    });
    this.options.labels = labels;
  }

  updateLabels() {
    this.options.labels = this.commonService.getChartLabels();
  }

  updateColors() {
    this.options.colors = this.commonService.getChartColors();
  }

  getEmotionColor(emotion: string) {
    return this.commonService.getEmotionColor(emotion);
  }

}
