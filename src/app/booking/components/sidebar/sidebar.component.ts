import { Component, EventEmitter, Output } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MyRoomComponent } from '../../my-room/my-room.component';
import { PaymentComponent } from '../../payment/payment.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  @Output() viewSelected = new EventEmitter<any>();

  homeView = {title: 'Home', component: DashboardComponent};
  myRoomView = {title: 'MyRoom', component: MyRoomComponent};
  paymentView = {title: 'Payment', component: PaymentComponent};
  selectedView: any;

  constructor() {
    this.selectedView = this.homeView;
    this.viewSelected.emit(this.homeView);
  }

  selectView(view: any): void {
    this.selectedView = view;
    this.viewSelected.emit(view);
  }
}
