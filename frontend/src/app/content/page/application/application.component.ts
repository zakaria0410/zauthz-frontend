import { Component, OnInit } from '@angular/core';
import { NamedService } from 'src/app/services/named.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  cols=[
    {field:{name:"id",header:"Id",type:"text",disabled:false},required:false,hidden:true,style:12},
    {field:{name:"name",header:"App name",type:"text",disabled:false},required:false,hidden:false,style:6},
  {field:{name:"descriptif",header:"Déscriptif",type:"area",disabled:false},required:false,hidden:false,style:12}
]
  data
  object
  options=[{label:"new",
    icon:'fas fa-plus',
    type:"changeVariable",
  variable:"display",
  value:true,
data:null}]
receiveForm(event){
  this.namedService.save(event,"application").subscribe(
    data=>    this.namedService.get("application").subscribe(
      data=>this.data=data.map(e=>{return Object.assign(e,
        {options:[{label:"Edit",
        icon:'fas fa-edit',
        type:"changeVariable",
      variable:"display",
      value:true,
    data:e},{
      label:"Edit",
        icon:'fas fa-edit',
        type:"executeUrl",
      url:"application/"+e.id
    }]})})
    )
  )
}

receiveclick(event){

if(event.type=="changeVariable"){
  this[event.variable]=event.value
if(event.data!=null)this.object=event.data
}
}
  display: boolean = false;
  hideDialog(){
  this.display=false
}
  showDialog() {
      this.display = true;
  }
  constructor(private namedService:NamedService) { }

  ngOnInit(): void {
    this.namedService.get("application").subscribe(
      data=>this.data=data.map(e=>{return Object.assign(e,
        {options:[{label:"Edit",
        icon:'fas fa-edit',
        type:"changeVariable",
      variable:"display",
      value:true,
    data:e}]})})
    )
  }

}
