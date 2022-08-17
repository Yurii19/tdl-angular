import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-card',
  templateUrl: './td-card.component.html',
  styleUrls: ['./td-card.component.scss']
})
export class TdCardComponent implements OnInit {

  @Input() settings: any = { title: 'title', text: 'text' };

  constructor() { }

  ngOnInit(): void {
  }

}
