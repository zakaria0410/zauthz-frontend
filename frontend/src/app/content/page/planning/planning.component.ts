import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg, EventInput, FullCalendarComponent } from '@fullcalendar/angular';
import { NamedService } from 'src/app/services/named.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  controls=[{field:{name:"dateDebutRdv",header:"Date Début",type:"date",disabled:true},required:false,hidden:false,style:6},
  {field:{name:"dateFinRdv",header:"Date Fin",type:"date",disabled:true},required:false,hidden:false,style:6},
  {field:{name:"patient",header:"Patient",type:"select",disabled:false,url:"patient/all",option:"nom prenom cin"},required:false,hidden:false,style:6},
  {field:{name:"medcin",header:"Médcin",type:"select",disabled:false,url:"medcin/all",option:"nom prenom cin"},required:false,hidden:false,style:6},
  {field:{name:"motif",header:"Motif",disabled:false,type:"area"},required:false,hidden:false,style:12}
  
]
  display=false
  someMethod(selectInfo: any) {
 
this.display=true  }
assignToObject(event){
  this.rdvObject=Object.assign(this.rdvObject,event)
}
  saveRdv() {
 
    this.display = false;
    this.namedService.save(this.rdvObject,'rdv').subscribe(data=>{
      const calendarApi = this.selectedInfo.view.calendar;
      calendarApi.addEvent({
        id:""+data.id,
        title:"ana",
        start: this.selectedInfo.startStr,
        end: this.selectedInfo.endStr,
        allDay: this.selectedInfo.allDay
      });        
    })
  }

  constructor(private namedService:NamedService) { }

  async ngOnInit() {
    let lis = document.getElementById("sidebar").getElementsByTagName("li");
    for(let i:number=0;i<lis.length;i++){
     lis[i].classList.remove("active")
    }
    document.querySelector('#sidebar li:nth-child(4)').classList.toggle("active")
  let list:any[]=await this.namedService.listAll('rdv').toPromise()
console.log("rdvss",list)
let calendarApi = this.calendarComponent.getApi();

  list.forEach(e=>{
    calendarApi.addEvent({
      title:''+e.patient.nom,
      start:e.dateDebutRdv ,
      end:e.dateFinRdv
      
    }); 
  })
  this.calendarOptions.initialEvents=this.INITIAL_EVENTS}
   TODAY_STR = new Date().toISOString().replace(/T.*$/, '');
   today_str(date:Date){
     return date.toISOString().replace(/T.*$/, '');
   }
   
   // YYYY-MM-DD of today
  INITIAL_EVENTS: EventInput[] = [

  ];
  

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    initialView: 'timeGridWeek',
    initialEvents: this.INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }
  selectedInfo: DateSelectArg
hide(){
  this.display=false
 console.log(this.rdvObject)
}
rdvObject={dateDebutRdv:null,dateFinRdv:null,patient:null,motif:null,medcin:null,state:{id:8019}}
  handleDateSelect(selectInfo: DateSelectArg) {
    
 this.selectedInfo=selectInfo
   const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection
this.display=true
    this.rdvObject={dateDebutRdv:selectInfo.start,dateFinRdv:selectInfo.end,patient:null,motif:null,medcin:null,state:{id:8019}}

   
 
/**
  X      calendarApi.addEvent({
        id:""+88,
        title:"ana",
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
   */  
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

}
