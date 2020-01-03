import { Component, OnInit } from '@angular/core';
import {RecentUpdate} from '../services/models/RecentUpdate';
import {ApiService} from '../services/api.service';
import {SocketClientService} from '../services/socket-client.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-recent-updates',
  templateUrl: './recent-updates.component.html',
  styleUrls: ['./recent-updates.component.scss']
})
export class RecentUpdatesComponent implements OnInit {
  recentUpdates: RecentUpdate[];
  constructor(private commonService: CommonService,
              private apiService: ApiService,
              private socketClientService: SocketClientService) { }

  ngOnInit() {
    this.apiService.getAllRecentUpdates().subscribe( result => this.recentUpdates = result.data);
    this.socketClientService.onRecentUser().subscribe( result => {
      this.recentUpdates.unshift(result);
    });
  }
  getEmotionColor(emotion: string) {
    return this.commonService.getEmotionColor(emotion);
  }
}
