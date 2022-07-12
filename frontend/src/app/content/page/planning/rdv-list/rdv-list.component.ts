import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NamedService } from 'src/app/services/named.service';

@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.scss'],
  providers:[MessageService]
})
export class RdvListComponent implements OnInit {
cols=[{field:{name:"dateDebutRdv",header:"Date Début",type:"date",disabled:true},required:false,hidden:false,style:6},
{field:{name:"dateConsultation",header:"Date Passage",type:"date",disabled:true},required:false,hidden:false,style:6},
{field:{name:"state",header:"State",type:"selectName",disabled:false,url:"rdvState/all",option:"name"},required:false,hidden:false,style:6},
{field:{name:"patient",header:"Patient",type:"selectPerson",disabled:false,url:"patient/all",option:"nom prenom cin"},required:false,hidden:false,style:6},
{field:{name:"medcin",header:"Médcin",type:"selectPerson",disabled:false,url:"medcin/all",option:"nom prenom cin"},required:false,hidden:false,style:6},
{field:{name:"motif",header:"Motif",disabled:false,type:"area"},required:false,hidden:false,style:12}

]
data
map=new Map()
@Input() url
test(){
  console.log("ana zakaria")
}
@Output() rdvToConsultation=new EventEmitter
options=[{label:"Acceuillir client",icon:"fa fa-pencil",url:"rdv/comeToOffice",condition:{value:8019,key:'state.id'},expression:"comeToOffice",action:this.test.bind(this)},
{label:"Passer En consultation",icon:"fa fa-plus",url:"rdv/fromWaitToConsultation",condition:{value:8020,key:'state.id'},expression:"fromWaitToConsultation",action:this.test.bind(this)},
{label:"Finaliser consultation",icon:"fa fa-trash",url:"rdv/fromConsulationToFinalisation",condition:{value:8021,key:'state.id'},expression:"fromConsulationToFinalisation",action:this.test.bind(this)}]
  constructor(private namedService:NamedService,
    private messageService: MessageService) { }
optionClicked(event){
 this.namedService.save(event.data,event.url).subscribe(
  data=>{
this.namedService.get(this.url).subscribe(
  list=>{this.data=list
    this.rdvToConsultation.emit('ok')
  }
  
)
  },
  error=>{
    this.messageService.add({severity:'error', summary:'Action denied', detail:error.error.message});
  }
 )
}
  passerEnconsultation(rdv){

    this.rdvToConsultation.emit(rdv)
    
  }

  ngOnInit(): void {
    
this.map.set(8019,8020)
this.map.set(8020,8021)
this.map.set(8021,8022)
this.namedService.get(this.url).subscribe(
  data=>{this.data=data
  console.log("data rdv list",data)}

)
}
action(rdv):any{
  switch(rdv.state.id){
    case 8019 : return {action:"reçevoir patient",etat:"Non Présent"}
    case 8020 : return {action:"passer en consultation",etat: "En attente"}
    case 8020 : return {action:"Finaliser consultation",etat: "En Cabinet"}
    case 8021 : return {action:"Facturer consultation",etat: "Consultation Fianlisée"}
  }
}

}
