import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {FormControl} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  @Input() user: User;
  newPassword = new FormControl('');
  result: { 'message': '--'};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  changePassword() {
    this.user.password = this.newPassword.value;
    console.log(this.user);
    this.userService.updateUser(this.user).subscribe(result => this.result = result);
  }
}
