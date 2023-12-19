import axios from 'axios';
import { Observable } from 'rxjs';
import { environment } from './enviroments'

export class ListTaskDoneService {
  private apiBaseUrl: string;

  constructor() {
    this.apiBaseUrl = environment.apiBaseUrl;
  }

  listTaskDone(): Observable<any> {
    const url = `${this.apiBaseUrl}/ListTaskDone`;
    return new Observable(observer => {
      axios.get(url)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
