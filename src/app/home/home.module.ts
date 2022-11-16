import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {StepsModule} from 'primeng/steps';
import {ImageSelectComponent} from './components/ui/image-select/image-select.component';
import {StepOneComponent} from './components/step-one/step-one.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {StepTwoComponent} from './components/step-two/step-two.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {NumberDirective} from '../utilities/number.directive';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {TextDirective} from '../utilities/text.directive';
import {StepThreeComponent} from './components/step-three/step-three.component';
import {PersonComponent} from './components/step-three/person/person.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {StepFourComponent} from './components/step-four/step-four.component';
import {ToastModule} from 'primeng/toast';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    HomePageComponent,
    ImageSelectComponent,
    StepOneComponent,
    StepTwoComponent,
    NumberDirective,
    TextDirective,
    StepThreeComponent,
    PersonComponent,
    StepFourComponent,
  ],
  imports: [
    StepsModule,
    ButtonModule,
    DropdownModule,
    CommonModule,
    HomeRoutingModule,
    RippleModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
    CalendarModule,
    ToastModule,
    RadioButtonModule,
    FormsModule,
  ]
})
export class HomeModule {
}
