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
  public user: User;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User();
  }

   addUser(){
    this.user.firstname = this.firstname.value;
    this.user.lastname = this.lastname.value;
    this.user.email = this.email.value;
    this.user.phoneNumber = this.phone.value;
    this.user.password = this.password.value;
    this.user.idPiso = '-1';

    this.userService.registerUser(this.user).subscribe(
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
