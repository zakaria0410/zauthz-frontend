import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
@Input() data
@Input() label
@Input() options
@Output() clickEven=new EventEmitter
clickOption(option){
  this.clickEven.emit(option)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
