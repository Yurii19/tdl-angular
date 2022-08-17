import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-td-card',
  templateUrl: './td-card.component.html',
  styleUrls: ['./td-card.component.scss']
})
export class TdCardComponent implements OnInit {

  @Input() settings: any = { title: 'title', description: 'text', status: 'to do' };

  statusColor : String = '';

  constructor() {

  }

  ngOnInit(): void {
    this.statusColor = this.settings.status === 'to do' ? 'warn' : 'primary';
  }

}
