import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from 'src/app/interfaces/Room';
import { environment } from 'environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ],
})

export class DashboardComponent implements OnInit {
[x: string]: any;
isModalOpen: boolean[] = [];
roomDescription: string = 'Room description goes here...';
rooms: Room[] = [];

  interestedPeople: { alias: string }[] = [
    { alias: 'Anonymous1' },
    { alias: 'Anonymous2' },
    { alias: 'Anonymous3' }
  ];

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getRoomsListing();
  }

  toggleModel(index: number) {
    this.isModalOpen[index] = !this.isModalOpen[index];
  }

  getRoomsListing() {
    this.http.get<Room[]>(environment.BASE_URL  + '/room').subscribe(
      (rooms: Room[]) => {
        this.rooms = rooms;
        console.log('Room listings successfully retrieved.', rooms);
      },
      (error: any) => {
        console.error('Could not get room listings', error);
      }    
    )
  }

  showInterests() {
    // Logic to show interests
  }

  bookRoom() {
    // Logic to book the room and proceed to payment
  }

  closeModal(event: MouseEvent, index: number) {
    if (event.target === event.currentTarget) {
      this.isModalOpen[index] = false;
    }
  }
  
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }
  

}
