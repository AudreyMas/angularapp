// INTERFACE = model for the data  = MAP oject with the creation of MODELS => User.ts

import {Component, OnInit} from '@angular/core'
import { Statement } from '@angular/compiler';

import {User} from '../../models/User'

@Component({
  selector:'app-user',
  templateUrl: './user.component.html',
  styleUrls:['./User.component.scss'],
})

export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor(){ // Add the Datas
  
  }
  ngOnInit(){
    this.user={
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA',
      }
    }
  }

}

