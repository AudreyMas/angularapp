import { Component, OnInit, ViewChild } from '@angular/core';
//ViewChild get access to the child component
import { User } from '../../models/User';
import {DataService} from '../../services/data.service';

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

  constructor(private dataService: DataService) { //injected

  }


  //Methods
  ngOnInit() { //ajx place or service

   this.users = this.dataService.getUsers();
    
    this.loaded = true;
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
