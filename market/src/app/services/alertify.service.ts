import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  [x: string]: any;

  constructor() { }

  success(message:string){
    alertify.success(message)
  }
  error(message:string){
alertify.error(message);
  }
}
