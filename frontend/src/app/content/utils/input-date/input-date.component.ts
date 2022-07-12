import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
@Input() date:Date
@Input() disabled=false
  constructor() { }

  ngOnInit(): void {
  }

}
