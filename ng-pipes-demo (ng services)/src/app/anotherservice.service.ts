import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnotherserviceService {
  constructor() { }
  additionalinfo = "This is additional information from another service.";
}
