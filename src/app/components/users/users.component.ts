import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;


  constructor() { //inhected
  }


  //Methods
  ngOnInit() { //ajx place or service

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'lala',
        age: 30,
        address: {
          street: '5 Los st',
          city: 'Miami',
          state: 'FL',
        }
      },
      {
        firstName: 'Karen',
        lastName: 'Polo',
        age: 15,
        address: {
          street: '2 california st',
          city: 'Danemark',
          state: 'MA',
        }
      }
    ];

    this.loaded = true;

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson', 
    })
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
