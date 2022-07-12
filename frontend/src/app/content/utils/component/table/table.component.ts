import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() cols
@Input() data
@Input() options
@Output() clickEven=new EventEmitter

clickOption(option){
this.clickEven.emit(option)

}
  constructor() { }

  ngOnInit(): void {
  }

}
