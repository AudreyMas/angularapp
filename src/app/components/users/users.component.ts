import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true; //show informations about user
  loaded: boolean = false; //loading text 
  enableAdd: boolean= true; // active or not the button

  constructor() { //injected
  }


  //Methods
  ngOnInit() { //ajx place or service

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 80,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Kevin',
        lastName: 'lala',
        age: 30,
        address: {
          street: '5 Los st',
          city: 'Miami',
          state: 'FL',
        },
        isActive: false,
        registered: new Date('03/11/2017 06:30:00')
      },
      {
        firstName: 'Karen',
        lastName: 'Polo',
        age: 15,
        address: {
          street: '2 california st',
          city: 'Danemark',
          state: 'MA',
        },
        isActive: true,
        registered: new Date('11/02/2016 10:30:00')
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }



}
