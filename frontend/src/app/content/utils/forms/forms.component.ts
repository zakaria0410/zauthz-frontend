import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Input() controls:any[]=[]
  @Input() object:any
  @Output() formSsaved=new EventEmitter
  @Output() cancel=new EventEmitter
  baseForm:FormGroup
  isSave=false;
  
    constructor(private formBuilder:FormBuilder) { }
    updateForm(event:any,ctrl:string){
      this.baseForm.get(ctrl)?.setValue(event)
    }
    changeValue(event:any,ctrl:any){
  this.baseForm.get(ctrl)?.setValue(event)
  let object={}
  object[ctrl]=event
// this.formSsaved.emit(object)  
 }
    changeValueFromDown(event:any,ctrl:any){
      //drop form
      this.baseForm.get(ctrl)?.setValue(event.value)
      console.log("My Foooorm",{ctrl:event.value})
      let ob={}
      ob[ctrl]=event.value
      this.formSsaved.emit(ob)   }
  
    control():any[] {
   
  return this.controls.map(e=>{return e.field.name})
       }
        ngOnChanges(changes: SimpleChanges) {
  if(changes['object']){
    if(changes['object']?.currentValue!=null){
   if(!this.baseForm)this.baseForm=this.formBuilder.group({})
      //new object
     this.baseForm.patchValue(changes['object']?.currentValue)
  }
  }
    
    }
    ngOnInit(): void {
     //"NGonitForm
      this.baseForm=this.formBuilder.group({})
    if(this.object===null){
      if(this.controls.length!==0){
        //object null and length not null
        this.controls.forEach(e=>{
          if(e.required){
            
             this.baseForm.addControl(e.field.name,new FormControl('',[Validators.required]))
             
          }else
                    this.baseForm.addControl(e.field.name, new FormControl(''))
      });
            
      }
    }
    else{   
      //obJect NOT NULL
      this.controls.forEach(e=>{
        if(e.required){
          this.baseForm.addControl(e.field.name,new FormControl('',[Validators.required]))
          
         }
        else
           this.baseForm.addControl(e.field.name, new FormControl('')) 
          });
    }  
    }
    value(object:any,s:any){
     if(object!=null) {return object[s]}
     else return null
    }
    save(){
      this.isSave=true;
        if(this.baseForm.status=="VALID"){
          this.isSave=false;
          this.formSsaved.emit(this.baseForm.value)
        this.baseForm.reset()}
    }
    
    
    isRequeredMark(isRequered:boolean) : string{
      return isRequered ? " *" : "";
      
  
    }
  
    get f() {
      return this.baseForm.controls;
     }
    Cancel(){
      this.cancel.emit(false);
    }
  


}
