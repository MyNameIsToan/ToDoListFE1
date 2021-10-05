import { UsersService } from './../../c_service/Users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/common/Users';

@Component({
  selector: 'app-AddNewUser',
  templateUrl: './AddNewUser.component.html',
  styleUrls: ['./AddNewUser.component.css']
})
export class AddNewUserComponent implements OnInit {
  UserForm!: FormGroup;

  constructor(private UserService : UsersService) {
    this.UserForm = new FormGroup({
      'Username': new FormControl(null,Validators.required),
      'Password': new FormControl(null,Validators.required),
      'Email': new FormControl(null,Validators.required),
      'Lastname': new FormControl(null,Validators.required),
      'Firstname': new FormControl(null,Validators.required)
    })
  }

  ngOnInit() {
  }

  OnSubmit(){
    if(this.UserForm.invalid){
      console.log('invalid');
      return;
    }
    this.SaveUser();
  }

    SaveUser(){
      var users = new Users();
      users.username = this.UserForm.controls['Username'].value;
      users.password = this.UserForm.controls['Password'].value;
      users.email = this.UserForm.controls['Email'].value;
      users.firstname = this.UserForm.controls['Firstname'].value;
      users.lastname = this.UserForm.controls['Lastname'].value;
      this.UserService.SaveUser(users).subscribe(data=>{
        console.log(users);
        window.location.reload();
      });
    }
  }

