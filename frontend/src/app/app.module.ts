import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './content/navigation/navbar/navbar.component';
import { SidebarComponent } from './content/navigation/sidebar/sidebar.component';
import { ContentHeaderComponent } from './content/navigation/content-header/content-header.component';
import { FooterComponent } from './content/navigation/footer/footer.component';
import { HomeComponent } from './content/page/home/home.component';
import { Row1Component } from './content/page/home/row1/row1.component';
import { Row2Component } from './content/page/home/row2/row2.component';
import { KpiBoxComponent } from './content/utils/kpi/kpi-box/kpi-box.component';
import { TableComponent } from './content/utils/component/table/table.component';
import { ExpandedTableComponent } from './content/utils/component/table/expanded-table/expanded-table.component';
import { PlanningComponent } from './content/page/planning/planning.component';
import { RdvListComponent } from './content/page/planning/rdv-list/rdv-list.component';
import { MysidebarComponent } from './content/navigation/mysidebar/mysidebar.component';

import { DialogComponent } from './content/utils/dialog/dialog.component';
import { FormsComponent } from './content/utils/forms/forms.component';
import { InputComponent } from './content/utils/input/input.component';
import { InputAreaComponent } from './content/utils/input-area/input-area.component';
import { InputDateComponent } from './content/utils/input-date/input-date.component';
//full calendar
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
//primeng
import {ButtonModule} from 'primeng/button';
import { ApplicationComponent } from './content/page/application/application.component';
import {DialogModule} from 'primeng/dialog';

import {StepsModule} from 'primeng/steps';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {InputSwitchModule} from 'primeng/inputswitch';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';

import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { AutoCompleteModule } from "primeng/autocomplete";

import { ChipsModule } from "primeng/chips";
import {ToolbarModule} from 'primeng/toolbar';
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";

import {DividerModule} from 'primeng/divider';

import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import { DropdownComponent } from './content/utils/dropdown/dropdown.component';
import { ApplicationDetailsComponent } from './content/pages/application/application-details/application-details.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentHeaderComponent,
    FooterComponent,
    PlanningComponent,
    RdvListComponent,
    HomeComponent,
    Row1Component,
    Row2Component,
    KpiBoxComponent,
    TableComponent,
    ExpandedTableComponent,
    MysidebarComponent,
    ApplicationComponent,
    DialogComponent,
    FormsComponent,
    InputComponent,
    InputAreaComponent,
    InputDateComponent,
    DropdownComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FullCalendarModule,
   ButtonModule,
   FormsModule,
   DialogModule,
   ReactiveFormsModule,
   StepsModule,
   DropdownModule,
   TabViewModule,
   TableModule,
   HttpClientModule,
   ToolbarModule,

   ChipsModule,

AutoCompleteModule,

   InputNumberModule,
 FormsModule,
 InputNumberModule,
 DialogModule,
 InputSwitchModule,
 CalendarModule,
 InputSwitchModule,

 ChipsModule,

 CheckboxModule,
 InputMaskModule,
 InputNumberModule,
 CascadeSelectModule,
 MultiSelectModule,

 InputTextareaModule,
 InputTextModule,
 DividerModule,
 RadioButtonModule,

 FullCalendarModule,
 CalendarModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
