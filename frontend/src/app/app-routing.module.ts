import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './content/page/application/application.component';
import { HomeComponent } from './content/page/home/home.component';
import { ExpandedTableComponent } from './content/utils/component/table/expanded-table/expanded-table.component';
import { TableComponent } from './content/utils/component/table/table.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'application',component:ApplicationComponent},
{path:'expandedTable',component:ExpandedTableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
