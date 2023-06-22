import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent {
  selectedView: any;

  constructor() {
    this.selectedView = {component: DashboardComponent };
  }

  onViewSelected(view: any) {
    this.selectedView = view;
  }
}
