import {Status} from '../components/step-two/models/status.model';

export interface Home {
  image: File | null;
  amount: number;
  date: Date;
  status: Status | null;
  sourceOfFound: string;
  selectedPerson: Person | null;
}

export interface Person {
  id: number;
  fullName: string;
  image: string;
  email: string;
  age: number;
  country: string;
}
