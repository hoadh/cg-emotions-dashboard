import {Component, OnInit} from '@angular/core';

enum EmotionPosition {
  HAPPY,
  GOOD,
  NORMAL,
  BAD,
  ANGER
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Biểu đồ mức độ hạnh phúc CodeGym';
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

  options = {
    title: {
      // text: "Biểu đồ 2020",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
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

  ngOnInit(): void {
    this.updateSeries();
    this.updateLabels();
    this.updateColors();
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
    this.options.colors = ['#6610f2', '#28a745', '#ffc107', '#fd7e14', '#dc3545'];
  }
}
