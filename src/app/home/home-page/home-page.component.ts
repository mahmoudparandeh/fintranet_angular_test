import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import {HomeService} from '../home.service';
import {Home} from '../models/home.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  providers: [MessageService]
})
export class HomePageComponent implements OnInit {
  stepsItems: MenuItem[] = [];
  activeIndex = 0;
  shouldEnableNextButton = false;
  data!: Home;

  constructor(private homeService: HomeService, private messageService: MessageService, private primengConfig: PrimeNGConfig) {
    this.homeService.data.subscribe((data) => {
      this.data = data;
      this.shouldEnableNextButton = this.handelShowingNextButton(data, this.activeIndex);
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.stepsItems = [{
      label: 'Upload image',
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
      {
        label: 'Form',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'People',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      {
        label: 'Summary',
        command: (event: any) => {
          this.activeIndex = 3;
        }
      }
    ];
  }

  onNextClicked(): void {
    this.activeIndex += 1;
    this.homeService.data.next(this.data);
  }

  onPrevClicked(): void {
    this.activeIndex -= 1;
    this.homeService.data.next(this.data);
  }

  handelShowingNextButton(data: Home, activeIndex: number): boolean {
    switch (activeIndex) {
      case 0: {
        return data.image !== null;
      }
      case 1: {
        return data.amount! >= 0 && data.status !== null && data.date!.toDateString().length > 0 && data.sourceOfFound.length > 0;
      }
      case 2: {
        return data.selectedPerson !== null
      }
    }
    return false;
  }

  onSubmit(): void {
    console.log('here');
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Your registration is complete'});
  }
}
