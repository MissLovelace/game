import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { filter, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  messageUser: Subject<string> = new Subject<string>();


    watchMessageUser(): Observable<string> {
    return this.messageUser.asObservable();
  }

    setmessageUser(message: string): void {
      this.messageUser.next(message);
  }


  watchNumber(): Observable<number> {
    return this.watchMessageUser().pipe(filter(ev => !isNaN(+(ev.trim())))).pipe(map(ev => +(ev.trim())));
  }

  watchOneWord(): Observable<string> {
    return this.watchMessageUser().pipe(filter(ev => (ev.trim().indexOf(' ') === -1 ) && (isNaN(+ev))));
}

watchTwoWord(): Observable<string> {
      return this.watchMessageUser().pipe(filter(ev => ev.trim().split(' ').length === 2));

}

watchNWord(): Observable<string> {
      return this.watchMessageUser().pipe(filter(ev => ev.trim().split(' ').length > 2));
}
}




