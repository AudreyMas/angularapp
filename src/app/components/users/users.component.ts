import { Component, OnInit, ViewChild } from '@angular/core';
//ViewChild get access to the child component
import { User } from '../../models/User';
import {UserService} from '../../services/user.service';

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
  @ViewChild('userForm')form: any;
  data: any;

  constructor(private dataService: UserService) { //injected

  }


  //Methods
  ngOnInit() { //ajx place or service

    this.dataService.getData().subscribe(data => {
      console.log(data);
    });

   this.dataService.getUsers().subscribe(users => {
     this.users = users;
     this.loaded = true;
   });

    
  }

  onSubmit({value, valid} : {value: User, valid:BooleanConstructor}) {
    if(!valid){
      console.log('form not valid');
    }else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.dataService.addUser(value);// value = data on the form

      this.form.reset();

    }
  }


}
