import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email:''
  };
  users: User[];
  showExtended: boolean = true; //show informations about user
  loaded: boolean = false; //loading text 
  enableAdd: boolean = false; // active or not the button
  showUserForm: boolean = false;

  constructor() { //injected
  }


  //Methods
  ngOnInit() { //ajx place or service

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email:'John@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'lala',
        email:'Kevin@mail.be',
        isActive: false,
        registered: new Date('03/11/2017 06:30:00'),
        hide: true,
      },
      {
        firstName: 'Karen',
        lastName: 'Polo',
        email:'karen@mail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true,
      }
    ];

    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user); //unshift = push but sent to the beginning of the array

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email:''
  //   }
  // }

  onSubmit(e) {
    console.log(123)
    e.preventDefault();
  }


}
