import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// Variable to use in this component
public email = new FormControl('');
public password = new FormControl('');

public UserLog: User;
constructor(
  private userService: UserService,
  private router: Router
) { }

ngOnInit(): void {
  this.UserLog = new User();
}

 logUser(){
  this.UserLog.email = this.email.value;
  this.UserLog.password = this.password.value;
  console.log('Parsed all the values');
  console.log(this.UserLog.email);

  this.userService.logUser(this.UserLog).subscribe(
    (data) => {
           console.log('data: ', data);
           this.router.navigate(['/main', { userId: data._id }]);
         },
       (error) => {
           console.log('error: ', error);
       }
  );
}

}
