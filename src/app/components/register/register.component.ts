import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// Variable to use in this component
  public firstname = new FormControl('');
  public lastname = new FormControl('');
  public email = new FormControl('');
  public password = new FormControl('');
  public phone = new FormControl('');
  public UserAdd: User;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.UserAdd = new User();
  }

   addUser(){
    this.UserAdd.firstname = this.firstname.value;
    this.UserAdd.lastname = this.lastname.value;
    this.UserAdd.email = this.email.value;
    this.UserAdd.phoneNumber = this.phone.value;
    this.UserAdd.password = this.password.value;
    console.log('Parsed all the values');
    console.log(this.UserAdd.firstname);

    this.userService.registerUser(this.UserAdd).subscribe(
      (data) => {
             console.log('data: ', data);
             this.router.navigateByUrl('/login');
           },
         (error) => {
             console.log('error: ', error);
         }
    );
 }

}
