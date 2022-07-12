import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent implements OnInit {

 
  @Output() textchanged:EventEmitter<any>=new EventEmitter()
  @Input() label:any

  @Input() value=""
 
  change(event:any){
    this.value=event.target.value
    this.textchanged.emit(event.target.value)
  }
    constructor() { }
  
    ngOnInit(): void {
    }
}
