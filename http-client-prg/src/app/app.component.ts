import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpclientService } from './httpclient.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientprg';
  httptasks: any;

  constructor(private httpclientList: HttpclientService) {
    this.httpclientList.getTasksRemotely().subscribe((data:any) => {
      this.httptasks = data;
    })
  }
}