import {Component, OnInit} from '@angular/core';
import {Home} from '../../models/home.model';
import {HomeService} from '../../home.service';
import {FormControl, Validators} from '@angular/forms';
import {Status} from './models/status.model';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.sass']
})
export class StepTwoComponent implements OnInit {
  data!: Home;
  amountController = new FormControl('', Validators.required);
  dateController = new FormControl(new Date(), Validators.required);
  statusController = new FormControl({code: 0, name: ''}, Validators.required);
  sourceOfFundController = new FormControl('', Validators.required);
  minDate = new Date();
  maxDate = new Date();
  status: Status[] = [
    {
      code: 1,
      name: 'pending',
    },
    {
      code: 2,
      name: 'rejected',
    },
    {
      code: 3,
      name: 'approved',
    },
    {
      code: 4,
      name: 'submitted',
    },
  ];

  constructor(private homeService: HomeService) {
    this.homeService.data.subscribe((data) => {
      this.data = data;
      this.amountController.setValue(this.data.amount.toString(), {
        emitEvent: false,
      });
      this.dateController.setValue(this.data.date, {
        emitEvent: false,
      });
      this.sourceOfFundController.setValue(this.data.sourceOfFound, {
        emitEvent: false,
      });
      this.statusController.setValue(this.data.status, {
        emitEvent: false,
      });
    });
    this.maxDate.setDate(this.maxDate.getDate() + 5);
  }

  ngOnInit(): void {
    this.amountController.valueChanges.subscribe((amount) => {
      this.data.amount = +amount!;
      this.homeService.data.next(this.data);
    });
    this.dateController.valueChanges.subscribe((date) => {
      console.log(date, typeof date);
      this.data.date = (date as Date);
      this.homeService.data.next(this.data);
    });
    this.statusController.valueChanges.subscribe((status) => {
      console.log(status, typeof status);
      this.data.status = status!;
      this.homeService.data.next(this.data);
    });
    this.sourceOfFundController.valueChanges.subscribe((source) => {
      this.data.sourceOfFound = source!;
      this.homeService.data.next(this.data);
    });
  }

}
