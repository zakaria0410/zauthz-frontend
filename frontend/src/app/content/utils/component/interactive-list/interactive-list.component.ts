import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-interactive-list',
  templateUrl: './interactive-list.component.html',
  styleUrls: ['./interactive-list.component.scss']
})
export class InteractiveListComponent implements OnInit {
  @Input() data
  @Input() label
  @Input() options
  @Output() itemCliked=new EventEmitter
  clickMenu(option){
    this.data.forEach(element => {
      element.isactive=false
    });
    option.isactive=true
    this.itemCliked.emit(option)
  }
  active(option){
    if(option.isactive)return "active"
    else return ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
