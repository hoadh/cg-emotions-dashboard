import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RecentUpdatesComponent} from './recent-updates/recent-updates.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'recents', component: RecentUpdatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
