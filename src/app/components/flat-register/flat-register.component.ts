import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Flat} from '../../models/flat';
import {FlatService} from '../../services/flat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flat-register',
  templateUrl: './flat-register.component.html',
  styleUrls: ['./flat-register.component.css']
})
export class FlatRegisterComponent implements OnInit {
  @Output() flatAdded = new EventEmitter();
  result: Flat;

  constructor(
    private router: Router,
    private flatService: FlatService
  ) { }

  ngOnInit(): void {
  }

  async addFlat(name: string, description: string, maxPersons: number, longitude: number, latitude: number) {
    const newFlat = new Flat(name, description, false, maxPersons, longitude, latitude);
    await this.flatService.addFlat(newFlat).subscribe(result => {this.result = result; });
    this.flatAdded.emit();
  }

  Number(value: string) {
    return parseInt(value, 10);
  }
}
