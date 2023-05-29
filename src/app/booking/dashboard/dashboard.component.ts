import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {
  isModalOpen: boolean = false;
  roomDescription: string = 'Room description goes here...';
  interestedPeople: { alias: string }[] = [
    { alias: 'Anonymous1' },
    { alias: 'Anonymous2' },
    { alias: 'Anonymous3' }
  ];

  toggleModel() {
    this.isModalOpen = !this.isModalOpen;
  }

  showInterests() {
    // Logic to show interests
  }

  bookRoom() {
    // Logic to book the room and proceed to payment
  }

  closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isModalOpen = false;
    }
  }
  
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }
  

}
