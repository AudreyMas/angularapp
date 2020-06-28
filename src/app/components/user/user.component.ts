// INTERFACE = model for the data  = MAP oject with the creation of MODELS => User.ts

import {Component} from '@angular/core'
import { Statement } from '@angular/compiler';

import {User} from '../../models/User'

@Component({
  selector:'app-user',
  templateUrl: './user.component.html',
  styleUrls:['./User.component.scss'],
  // template:'<h2>John Doe</h2>'
  // styles:[`
  //     h2 {
  //       color:blue
  //     }`
  //   ]
})

export class UserComponent {
  // Properties
  user: User;

  // Methods
  constructor(){ // Add the Datas
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

