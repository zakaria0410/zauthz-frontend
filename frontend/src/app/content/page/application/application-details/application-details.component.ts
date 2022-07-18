import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NamedService } from 'src/app/services/named.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {
  id: any;
application
modules
versions
cols=[
  {field:{name:"id",header:"Id",type:"text",disabled:false},required:false,hidden:true,hidden_table:true,style:12},
  {field:{name:"name",header:"module name",type:"text",disabled:false},required:false,hidden:false,hidden_table:false,style:6},
  {field:{name:"descriptif",header:"Descriptif",type:"area",disabled:false},required:false,hidden:false,hidden_table:false,style:12}
]
colsFunction=[
  {field:{name:"id",header:"Id",type:"text",disabled:false},required:false,hidden:true,hidden_table:true,style:12},
  {field:{name:"name",header:"Function name",type:"text",disabled:false},required:false,hidden:false,hidden_table:false,style:6},
  {field:{name:"unitPrice",header:"Unit Price",type:"text",disabled:false},required:false,hidden:false,hidden_table:false,style:6}
]
colsVersion=[
  {field:{name:"id",header:"Id",type:"text",disabled:false},required:false,hidden:true,hidden_table:true,style:12},
  {field:{name:"name",header:"Version name",type:"text",disabled:false},required:false,hidden:false,hidden_table:false,style:6},
]
options=[{label:"New Function",
icon:'fas fa-plus',
type:"changeVariable",
variable:"displayFunction",
value:true,
class:"success",
data:null}]

optionsVersion=[{label:"New Version",
icon:'fas fa-plus',
type:"changeVariable",
variable:"displayVersion",
value:true,
class:"success",
data:null}]

display=false
displayFunction=false;
displayVersion=false;

moduleSelected=null
click(option,module){
  if(option.type=="changeVariable"){
    this[option.variable]=option.value
   this.moduleSelected=module
  }
}
clickVersion(option){
  if(option.type=="changeVariable"){
    this[option.variable]=option.value
   //this.moduleSelected=module
  }
}
showDialog(){
  this.display=true
}
hideDialog(){
  this.display=false
}
showDialogFunction(){
  this.displayFunction=true
}
hideDialogFunction(){
  this.displayFunction=false
}
hideDialogVersion(){
  this.displayVersion=false
}
receiveForm(event){
  this.namedService.save(Object.assign(event,{application:this.application}),"module").subscribe(
    data=>this.modules.push(data)
  )
}
receiveFormFunction(event){
  this.namedService.save(Object.assign(event,{module:this.moduleSelected}),"function")
  .subscribe(
    data=>this.moduleSelected.functions.push(data)
  )
}
receiveFormVersion(event){
  this.namedService.save(Object.assign(event,{application:this.application}),"version")
  .subscribe(
    data=>this.versions.push(data)
  )
}
constructor(private route:ActivatedRoute,
    private namedService:NamedService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  this.namedService.get("application/"+this.id).subscribe(
    data=>this.application=data
  )
  this.namedService.get("module/application/"+this.id).subscribe(
data=>{data.forEach(async e => {
  e.functions=await this.namedService.get("function/module/"+e.id).toPromise()
});

this.modules=data}
)
this.namedService.get("version/application/"+this.id).subscribe(
  data=>this.versions=data
)
}

}
