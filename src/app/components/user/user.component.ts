import {Component} from '@angular/core'
import { Statement } from '@angular/compiler';

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
  firstName='John';
  lastName = 'Smith';
  age = 30;
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
  // Methods
  constructor(){ //Initialize the component //Injected dependencies

  }

  showAge(){
    return this.age + 2;
  }
}