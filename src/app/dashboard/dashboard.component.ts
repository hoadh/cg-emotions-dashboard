import { Component, OnInit } from '@angular/core';
import {ApexOptions} from 'ng-apexcharts';
import {RecentUpdate} from '../services/models/RecentUpdate';
import {ApiService} from '../services/api.service';
import {SocketClientService} from '../services/socket-client.service';
import {TodayStatistic} from '../services/models/TodayStatistic';
import {CommonService} from '../services/common.service';
enum EmotionPosition {
  HAPPY,
  GOOD,
  NORMAL,
  BAD,
  ANGER
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading = true;
  emotions = [
    {
      emotion: 'Siêu hạnh phúc',
      count: 20
    },
    {
      emotion: 'Khá hạnh phúc',
      count: 20
    },
    {
      emotion: 'Bình thường',
      count: 20
    },
    {
      emotion: 'Không tốt',
      count: 20
    },
    {
      emotion: 'Tào lao',
      count: 20
    },
  ];

  options: ApexOptions = {
    title: {
      // text: "Biểu đồ 2020",
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
      text: 'Đang tải...'
    },
    chart: {
      type: 'donut'
    },
    series: [],
    labels: [],
    colors: [],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
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
    this.apiService.getTodayEmotions().subscribe( result => this.updateDashboard(result.data));
    this.apiService.getRecentEmotions().subscribe( result => this.recentUpdates = result.data);
    this.socketClientService.onUpdateDashboard().subscribe( result => this.updateDashboard(result));
    this.socketClientService.onRecentUser().subscribe( result => {
      while (this.recentUpdates.length > 50) {
        this.recentUpdates.pop();
      }
      this.recentUpdates.unshift(result);
    });
  }

  updateDashboard(result: TodayStatistic) {
    if (result) {
      this.options.series = result.series;
      this.isLoading = false;
    }
  }

  updateRecent() {

  }

  updateSeries() {
    this.options.series = [
      this.emotions[EmotionPosition.HAPPY].count,
      this.emotions[EmotionPosition.GOOD].count,
      this.emotions[EmotionPosition.NORMAL].count,
      this.emotions[EmotionPosition.BAD].count,
      this.emotions[EmotionPosition.ANGER].count,
    ];
  }

  updateLabels() {
    this.options.labels = [
      this.emotions[EmotionPosition.HAPPY].emotion,
      this.emotions[EmotionPosition.GOOD].emotion,
      this.emotions[EmotionPosition.NORMAL].emotion,
      this.emotions[EmotionPosition.BAD].emotion,
      this.emotions[EmotionPosition.ANGER].emotion,
    ];
  }

  updateColors() {
    this.options.colors = this.commonService.getChartColors();
  }

  getEmotionColor(emotion: string) {
    return this.commonService.getEmotionColor(emotion);
  }

}
