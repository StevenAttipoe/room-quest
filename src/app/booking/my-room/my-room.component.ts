import { Component } from '@angular/core';

class Room {
  name: string;
  capacity: number;
  location: string;
  description: string;
  showDetails: boolean;

  constructor(name: string, capacity: number, location: string, description: string) {
    this.name = name;
    this.capacity = capacity;
    this.location = location;
    this.description = description;
    this.showDetails = false;
  }
}

@Component({
  selector: 'app-my-room',
  templateUrl: './my-room.component.html',
  styles: [
  ]
})
export class MyRoomComponent {
    rooms: Room[];

  constructor() {
    this.rooms = [
      new Room('Room 1', 4, 'Building A', 'This is Room 1 description')
    ];
  }

  toggleRoomDetails(room: Room): void {
    room.showDetails = !room.showDetails;
  }

}
