import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.scss']
})
export class AdminTemplateComponent implements OnInit {
  @Input() title
@Input() cols
@Input() data
@Input() options
@Output() clickEven=new EventEmitter
  constructor() { }
receiveClick(event){
  this.clickEven.emit(event)

}
  ngOnInit(): void {
  }

}
