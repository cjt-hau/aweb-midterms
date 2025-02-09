import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  constructor(private http: HttpClient) { }

  getTasksRemotely(): Observable<any> {
    // Filtered the list to only show tasks that are completed and limited the data displayed to only 10 tasks.
    return this.http.get('https://jsonplaceholder.typicode.com/todos?completed=true&_limit=10');
  }
}