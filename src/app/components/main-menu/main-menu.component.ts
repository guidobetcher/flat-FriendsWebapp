import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {FlatService} from '../../services/flat.service';
import {Flat} from '../../models/flat';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  lookingForFlat: boolean;
  user: User;
  flat: Flat;
  flatDetails: boolean;
  userId: string;
  showProfile: boolean;
  passwordChange: boolean;

  constructor(
    private userService: UserService,
    private flatService: FlatService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.lookingForFlat = false;
    this.flatDetails = false;
    this.user = new User();
    await this.route.paramMap.subscribe(params => {this.userId = params.get('userId'); });
    await this.loadUser();
  }

  searchFlat() {
    this.lookingForFlat = !this.lookingForFlat;
  }

  async showMyFlat() {
    this.flatDetails = !this.flatDetails;
    console.log(this.user.idPiso);
    await this.flatService.getFlatById(this.user.idPiso).subscribe(flat => {
      this.flat = flat;
    });
  }

  deleteFlat(_id: string) {
    this.flatService.deleteFlat(_id).subscribe(() => {
        console.log('Flat deleted');
        this.loadUser();
      },
      (err) => console.log(err)
    );
  }
  hasFlat() {
    console.log('Has flat: id piso: ', this.user.idPiso);
    const ret = this.user.idPiso != null;
    console.log(ret);
    return ret;
  }

  async loadUser() {
    await this.userService.getUser(this.userId).subscribe(user => {
      this.user._id = user._id;
      this.user.firstname = user.firstname;
      this.user.lastname = user.lastname;
      this.user.email = user.email;
      this.user.idPiso = user.idPiso;
      console.log(this.user.idPiso);
      this.user.phoneNumber = user.phoneNumber;
      this.user.password = user.password;
      console.log(user);
    });
    console.log(this.user);
  }

  switchShowProfile() {
    this.showProfile = !this.showProfile;
  }

  switchPasswordChange() {
    this.passwordChange = !this.passwordChange;
    console.log(this.passwordChange);
  }
}
