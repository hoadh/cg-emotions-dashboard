import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recent-item',
  templateUrl: './recent-item.component.html',
  styleUrls: ['./recent-item.component.scss']
})
export class RecentItemComponent implements OnInit {

  @Input() username: string;
  @Input() color: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
