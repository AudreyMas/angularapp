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
  currentClasses = {}; // style of the button
  currentStyles ={}; 


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
        image: 'http://lorempixel.com//600/600/people/3',
        isActive: true,
        balance:100,
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
        image: 'http://lorempixel.com//600/600/people/2',
        isActive: false,
        balance:200,
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
        image: 'http://lorempixel.com//600/600/people/1',
        isActive: true,
        balance:50,
        registered: new Date('11/02/2016 10:30:00')

      }
    ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson', 
    // })
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses ={
      'btn-success' : this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top' :this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px',
    }
  }

}
