import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
@Input() cols
  @Input() display: boolean = false;
  @Output() hideDialogEvent=new EventEmitter()
  @Output() formEvent=new EventEmitter()
  @Input() object

  hideDialog(){
  this.display=false
this.hideDialogEvent.emit("tess")
}
transmissForm(event){
  this.formEvent.emit(event)
  this.hideDialogEvent.emit("tess")
}
  showDialog() {
      this.display = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
