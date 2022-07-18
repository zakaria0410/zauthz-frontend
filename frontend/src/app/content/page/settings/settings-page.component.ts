import { Component, Input, OnInit } from '@angular/core';
import { NamedService } from 'src/app/services/named.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
optionSelected
  options=[
  {label:'Déploiement Type',class:'deploymentType',style:'list-group-item list-group-item-action',isactive:true
  ,cols:[
    {field:{name:"id",header:"Id",type:"text",disabled:false},required:false,hidden:true,hidden_table:true,style:12},
    {field:{name:"name",header:"Déploiement name",type:"text",disabled:false},required:false,hidden:false,hidden_table:false,style:6},
  {field:{name:"descriptif",header:"Déscriptif",type:"area",disabled:false},required:false,hidden:false,hidden_table:true,style:12}


  ],
  options:[{label:"New Déploiement Type",
    icon:'fas fa-plus',
    type:"changeVariable",
  variable:"displayCreate",
  value:true,
  class:"success",
data:null}],
title:"Paramétrage Déployments"}
  
]
displayCreate=false
saveForm(event){
  this.namedService.save(event,this.optionSelected.class).subscribe(
    data=>{this.data.push(data)
    this.displayCreate=false}
  )
}
receiveClick(event){
  if(event.type=="changeVariable"){
    console.log(event.variable,this[event.variable],event.value)
    this[event.variable]=event.value
  }
 
}
@Input() data
  constructor(private namedService:NamedService) { }
  receiveItemClick(event){
  this.optionSelected=event
  this.namedService.get(this.optionSelected.class).subscribe(
    data=>this.data=data
  )
}
  ngOnInit(): void {
    
  }

}
