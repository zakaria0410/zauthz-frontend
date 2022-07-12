import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NamedService } from 'src/app/services/named.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() label="name"
  @Input() url:any=""
  @Input()list=[]
  @Input() datakey:any="id"
  @Input( ) placeHolder="select"
  @Input() value={id:null,nom:"All Categories"}
  @Output() valuechanged:EventEmitter<any>=new EventEmitter()
  @Input() class=""
  @Input() disabled=false
    constructor(private namedService:NamedService) { 
  
    }

  
    change(event:any){
      this.valuechanged.emit(event)
    }
   async ngOnInit() {
    
     if(this.url !==undefined &&  this.url!==null){
   //    console.log("urrrrrl",this.url)

const words = this.label.split(' ');
//console.log(words,"spllit")
this.label=""
words.forEach(e=>this.label=this.label+' '+e)
      let result=await this.namedService.get(this.url).toPromise()
result.forEach(e=>{
  let conversion=""
  words.forEach((w,index)=>{
 if(e[w]!==undefined && index!=0)   conversion=conversion+" "+e[w]
 else  if(e[w]!==undefined && index==0)   conversion=conversion+""+e[w] })
  this.list.push(Object.assign(e,{conversion:conversion}))
  console.log(this.list,"list dropdown")
})  
  //    this.list=result
     
     //changement url dropdown init dropdow
  
    }

}
}