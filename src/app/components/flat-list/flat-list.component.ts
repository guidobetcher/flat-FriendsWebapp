import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flat} from '../../models/flat';
import {FlatService} from '../../services/flat.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {
  @Input() inputUser: User;
  @Output() returnToMain = new EventEmitter();
  flats: Flat[];
  result: any;
  addingFlat: boolean;


  constructor(
    private route: ActivatedRoute,
    private flatService: FlatService
  ) { }

  async ngOnInit() {
    await this.flatService.getAvailableFlats().subscribe(flats => {this.flats = flats; });
  }

  async addTenant(flat: Flat) {
    console.log(this.inputUser);
    await this.flatService.addTenant(this.inputUser._id, flat._id).subscribe(result => {
      this.result = result;
      this.returnToMain.emit();
    });
    console.log(this.inputUser.firstname + ' was added to ' + flat.name);
  }

  switchAddingFlat() {
    this.addingFlat = !this.addingFlat;
  }

  async flatAdded() {
    await this.flatService.getAvailableFlats().subscribe(flats => {this.flats = flats; });
    console.log(this.flats);
    this.switchAddingFlat();
  }
}
