import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
]

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BookingModule { }
