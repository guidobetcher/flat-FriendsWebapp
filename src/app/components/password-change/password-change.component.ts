import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {FormControl} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  @Input() user: User;
  @Output() finish = new EventEmitter();
  newPassword = new FormControl('');
  result: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  changePassword() {
    this.user.password = this.newPassword.value;
    this.userService.updateUser(this.user).subscribe(result => this.result = result);
    this.finish.emit();
  }
}
