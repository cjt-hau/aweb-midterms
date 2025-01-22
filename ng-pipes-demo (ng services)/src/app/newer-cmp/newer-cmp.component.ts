import { Component } from '@angular/core';
import { AnotherserviceService } from '../anotherservice.service';

@Component({
  selector: 'app-newer-cmp',
  standalone: true,
  imports: [],
  templateUrl: './newer-cmp.component.html',
  styleUrl: './newer-cmp.component.css'
})
export class NewerCmpComponent {
  newinfo;
  constructor(private anotherservice:AnotherserviceService) {
    this.newinfo = this.anotherservice.additionalinfo;
  }
}
