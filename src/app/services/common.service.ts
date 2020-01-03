import { Injectable } from '@angular/core';

enum EmotionPosition {
  HAPPY,
  GOOD,
  NORMAL,
  BAD,
  ANGER
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private colors = ['#6610f2', '#28a745', '#ffc107', '#fd7e14', '#dc3545'];
  private emotions = [
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

  constructor() { }

  getChartColors(): string[] {
    return this.colors;
  }
  getChartLabels(): string[] {
    return [
      this.emotions[EmotionPosition.HAPPY].emotion,
      this.emotions[EmotionPosition.GOOD].emotion,
      this.emotions[EmotionPosition.NORMAL].emotion,
      this.emotions[EmotionPosition.BAD].emotion,
      this.emotions[EmotionPosition.ANGER].emotion,
    ];
  }
  getEmotionColor(emotion: string): string {
    switch (emotion) {
      case 'happy': return this.colors[EmotionPosition.HAPPY];
      case 'good': return this.colors[EmotionPosition.GOOD];
      case 'normal': return this.colors[EmotionPosition.NORMAL];
      case 'bad': return this.colors[EmotionPosition.BAD];
      case 'anger': return this.colors[EmotionPosition.ANGER];
    }
  }
}
