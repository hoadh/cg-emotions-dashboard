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

  constructor() { }

  getChartColors(): string[] {
    return this.colors;
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
