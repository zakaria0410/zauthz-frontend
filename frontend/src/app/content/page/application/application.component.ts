import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NamedService } from 'src/app/services/named.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
selected
  cols=[
    {field:{name:"id",header:"Id",type:"text",disabled:false},required:false,hidden:true,hidden_table:true,style:12},
    {field:{name:"name",header:"App name",type:"text",disabled:false},required:false,hidden:false,hidden_table:false,style:6},
  {field:{name:"descriptif",header:"Déscriptif",type:"area",disabled:false},required:false,hidden:false,hidden_table:true,style:12}
]
  data
  object
  options=[{label:"New Application",
    icon:'fas fa-plus',
    type:"changeVariable",
  variable:"display",
  value:true,
  class:"success",
data:null}]
receiveForm(event){
  this.namedService.save(event,"application").subscribe(
    data=>   {
      this.selected=data
      this.namedService.get("application").subscribe(
        data=>this.data=data.map(e=>{return Object.assign(e,
          {options:[{label:"Edit",
          icon:'fas fa-edit',
          type:"changeVariable",
        variable:"display",
        value:true,
        class:"warning",
      data:e},
      {label:"select",
      icon:'fas fa-search',
      type:"route",
    variable:"selected",
    class:"primary",
    value:e,
  data:e},
      {
        label:"Delete",
          icon:'fas fa-trash',
          type:"delete",
        url:e.id,
        class:"danger"
      }]})})
      )
    }
  )
  this.selected=this.object
  this.object=null
}

receiveclick(event){

if(event.type=="changeVariable"){
  this[event.variable]=event.value
if(event.data!=null)this.object=event.data
}
else if(event.type=="route"){
  //
  this.router.navigate(['application/'+event.value.id]);
}
else if(event.type=="delete"){
this.namedService.delete(event.url,"application").subscribe(
  data=>this.namedService.get("application").subscribe(
    data=>this.data=data.map(e=>{return Object.assign(e,
      {options:[{label:"Edit",
      icon:'fas fa-edit',
      type:"changeVariable",
    variable:"display",
    value:true,
    class:"warning",
  data:e},
  {label:"select",
      icon:'fas fa-search',
      type:"route",
    variable:"selected",
    value:e.id,
    class:"primary"
},
  {
    label:"Edit",
      icon:'fas fa-trash',
      type:"delete",
    url:e.id,
    class:"danger"
  }]})})
  )
)
}
}
  display: boolean = false;
  hideDialog(){
  this.display=false
}
  showDialog() {
      this.display = true;
  }
  constructor(private namedService:NamedService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.namedService.get("application").subscribe(
      data=>this.data=data.map(e=>{return Object.assign(e,
        {options:[{label:"Edit",
        icon:'fas fa-edit',
        type:"changeVariable",
      variable:"display",
      value:true,
    data:e,
  class:"warning"},
  {label:"select",
      icon:'fas fa-search',
      type:"route",
    variable:"selected",
    value:e,
    class:"primary",
  data:e},
    {
      label:"Delete",
        icon:'fas fa-trash',
        type:"delete",
      url:e.id,
      class:"danger"
    }
  ]
}
)
}
)
    )
  }

}
