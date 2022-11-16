import {Component, OnInit} from '@angular/core';
import {Home, Person} from '../../models/home.model';
import {HomeService} from '../../home.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.sass']
})
export class StepThreeComponent implements OnInit {
  selectedPerson = 1;
  people: Person[] = [
    {
      id: 1,
      fullName: 'Cristain Bale',
      age: 35,
      email: 'cristian.bale@gmale.com',
      image: '../../../../assets/images/avatar-1.png',
      country: 'Wales',
    },
    {
      id: 2,
      fullName: 'Roger Federer',
      age: 35,
      email: 'roger.federer@gmale.com',
      image: '../../../../assets/images/avatar-2.png',
      country: 'England',
    },
    {
      id: 3,
      fullName: 'Sebastian Rich',
      age: 35,
      email: 'sebastian.rich@gmale.com',
      image: '../../../../assets/images/avatar-3.png',
      country: 'Island',
    },
    {
      id: 4,
      fullName: 'Robert Anderson',
      age: 35,
      email: 'robert.anderson@gmale.com',
      image: '../../../../assets/images/avatar-4.png',
      country: 'Greenland',
    },
    {
      id: 5,
      fullName: 'Gareth Smith',
      age: 35,
      email: 'gareth.smith@gmale.com',
      image: '../../../../assets/images/avatar-5.png',
      country: 'Spain',
    },
  ]

  data!: Home;

  constructor(private homeService: HomeService) {
    this.homeService.data.subscribe((data) => {
      this.data = data;
      if (this.data.selectedPerson === null) {
        this.data.selectedPerson = this.people[0];
        this.homeService.data.next(this.data);
      }
      this.selectedPerson = this.data.selectedPerson!.id ?? 1;
    });
  }

  ngOnInit(): void {
  }

  onSelectedPersonChanged(id: number): void {
    this.selectedPerson = id;
    this.data.selectedPerson = this.people.find(p => p.id == id)!;
    this.homeService.data.next(this.data)
  }
}
