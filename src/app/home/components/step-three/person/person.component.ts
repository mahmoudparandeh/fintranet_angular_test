import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../../models/home.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
  @Input() person!: Person;
  @Input() selectedPerson!: number;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.selectedPerson);
    console.log(this.person);
  }

}
