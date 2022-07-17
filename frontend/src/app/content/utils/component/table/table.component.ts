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
@Input() title="Table title"
  colsshown: any;

clickOption(option){
this.clickEven.emit(option)
}
  constructor() { }

  ngOnInit(): void {
    console.log(this.cols)
    this.colsshown=this.cols.filter((e:any)=>e.hidden_table==false)
  }

}
