import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mysidebar',
  templateUrl: './mysidebar.component.html',
  styleUrls: ['./mysidebar.component.scss']
})
export class MysidebarComponent implements OnInit {
@Input() title="EmIso"
modules=[{
  label:"Application",
  active:false,
  collapsable:true,
  functions:[
    {label:"applications List",route:"application"}
  ]

}]


  constructor(private router:Router) { }
  active(module){
if(module.isActive)return ' menu-is-opening menu-open'
else return ''
  }
  activeLink(module){
    if(module.isActive)return 'active'
    else return ''
      }
  activeFunctions(module){
    if(module.isActive)return 'block;'
    else return 'none;'
  }
  clickModule(module){
  module.active=true
  console.log(module)
  }
  ngOnInit(): void {
  }

}
