import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../home.service';
import {Home} from '../../models/home.model';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.sass']
})
export class StepOneComponent implements OnInit {
  size = 0.5;
  image!: File;
  data!: Home;
  constructor(private homeService: HomeService) {
    this.homeService.data.subscribe((data) => {
      this.data = data;
      if (this.data.image !== null) {
        this.image = this.data.image;
      }
    })
  }

  ngOnInit(): void {
  }

  onImageSelected(object: StepOneComponent, image: File): void {
    object.data.image = image;
    object.homeService.data.next(object.data);
  }
}
