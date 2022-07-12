import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() textchanged:EventEmitter<any>=new EventEmitter()
  @Input() label:any
  @Input() value=""
  @Input() disabled=false
  change(event:any){
    this.value=event.target.value
    this.textchanged.emit(this.value)
  }
    constructor() { }
  
    ngOnInit(): void {
    }
  

}
