import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi-box',
  templateUrl: './kpi-box.component.html',
  styleUrls: ['./kpi-box.component.scss']
})
export class KpiBoxComponent implements OnInit {
@Input() stat
@Input() title
@Input() class
@Input() icon

  constructor() { }

  ngOnInit(): void {
  }

}
