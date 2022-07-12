import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysidebar',
  templateUrl: './mysidebar.component.html',
  styleUrls: ['./mysidebar.component.scss']
})
export class MysidebarComponent implements OnInit {
@Input() title="EmIso"
  constructor() { }

  ngOnInit(): void {
  }

}
