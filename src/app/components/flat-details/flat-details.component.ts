import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flat} from '../../models/flat';
import {User} from '../../models/user';

@Component({
  selector: 'app-flat-details',
  templateUrl: './flat-details.component.html',
  styleUrls: ['./flat-details.component.css']
})
export class FlatDetailsComponent implements OnInit {
  @Input() flat: Flat;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
