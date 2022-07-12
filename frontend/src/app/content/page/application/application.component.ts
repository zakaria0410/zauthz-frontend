import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  display: boolean = false;
hideDialog(){
  this.display=false
}
  showDialog() {
      this.display = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
