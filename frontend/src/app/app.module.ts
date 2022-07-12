import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { FormsModule } from '@angular/forms';

//full calendar
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
//primeng
import {ButtonModule} from 'primeng/button';
import { ApplicationComponent } from './content/page/application/application.component';
import {DialogModule} from 'primeng/dialog';


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
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FullCalendarModule,
   ButtonModule,
   FormsModule,
   DialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
