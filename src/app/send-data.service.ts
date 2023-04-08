import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiceService } from './service.service';
@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  transferdata=new Subject()

  constructor(private service:ServiceService) { }

  transfer(x:any)
  {
    this.transferdata.next(x)
  }
}
