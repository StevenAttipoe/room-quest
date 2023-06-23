import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyRoomComponent } from './my-room/my-room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
  }
]

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    SidebarComponent,
    MyRoomComponent,
    PaymentComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule]
})
export class BookingModule { }
