import axios from 'axios';
import { Observable } from 'rxjs';
import { environment } from './enviroments';

interface Task {
  taskId: number;
  taskTitle: string;
  taskDescription: string;
  done: boolean;
  createdAt: string;
  categoryName: string;
}

interface ApiResponse {
  value: Task[];
  statusCode: number;
}

export class ListTaskToDoService {
  private apiBaseUrl: string;

  constructor() {
    this.apiBaseUrl = environment.apiBaseUrl;
  }

  listTaskToDo(): Observable<Task[]> {
    const url = `${this.apiBaseUrl}/TasksToDo`;
    return new Observable(observer => {
      axios.get<ApiResponse>(url)
        .then(response => {
          observer.next(response.data.value);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
