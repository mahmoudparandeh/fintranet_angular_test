import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../home.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Home} from '../../models/home.model';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.sass'],
})
export class StepFourComponent implements OnInit {
  imagePath: any;
  data!: Home;

  constructor(private homeService: HomeService, private domSanitizer: DomSanitizer) {
    this.homeService.data.subscribe((data) => {
      this.data = data;
      const oFReader = new FileReader();
      oFReader.readAsDataURL(data.image!);
      const image = new Image();
      image.src = URL.createObjectURL(data.image!);
      oFReader.onload = oFREvent => {
        this.imagePath = this.domSanitizer.bypassSecurityTrustUrl(oFREvent!.target!.result!.toString());
      };
    });
  }

  ngOnInit(): void {
  }

}
