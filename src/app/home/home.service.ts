import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Home} from './models/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  data = new BehaviorSubject<Home>({
    image: null,
    date: new Date(),
    amount: 0,
    selectedPerson: null,
    status: null,
    sourceOfFound: '',
  });
}
