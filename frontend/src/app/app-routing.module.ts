import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailsComponent } from './content/page/application/application-details/application-details.component';
import { ApplicationComponent } from './content/page/application/application.component';
import { HomeComponent } from './content/page/home/home.component';
import { SettingsPageComponent } from './content/page/settings/settings-page.component';
import { ExpandedTableComponent } from './content/utils/component/table/expanded-table/expanded-table.component';
import { TableComponent } from './content/utils/component/table/table.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'application',component:ApplicationComponent},
  {path:'application/:id',component:ApplicationDetailsComponent},
{path:'expandedTable',component:ExpandedTableComponent},
{path:'settings',component:SettingsPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
