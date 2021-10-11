import { decrement, increment } from './../../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  $counter = this.store.select('app').pipe(map((e) => e.counter));

  constructor(private store: Store<{ app: IAppState }>) {}

  ngOnInit(): void {}

  incrementAction(){
    this.store.dispatch(increment())
  }

  decrementAction(){
    this.store.dispatch(decrement())
  }


  defineAction(value: string){
    const convertedValue = parseFloat(value);
    // this.store.dispatch(define(convertedValue))
  }

}
