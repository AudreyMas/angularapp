import {Component} from '@angular/core'

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
  lastName = 'Doe';
  age = 30;
  // Methods
  constructor(){ //Initialize the component //Injected dependencies
    //this.sayHello();
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
  }

  sayHello(){
    console.log(`Hello ${this.firstName}`) // or old js = Hello ''+''+this.firstName
  }

  hasBirthday(){
    this.age +=1;
  }
}