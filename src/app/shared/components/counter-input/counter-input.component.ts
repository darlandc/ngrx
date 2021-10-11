import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { defineCount, IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
})
export class CounterIntputComponent implements OnInit {
  @Input() counter = 0;
  // $counter = this.store.select('app').pipe(map((e) => e.counter));

  constructor(private store: Store<{ app: IAppState }>) {}

  ngOnInit(): void {}

  submitDefineCounterInput(value: string) {
    const convertedValue = parseFloat(value);
    console.log(convertedValue, 'convertedValue');
    this.store.dispatch(defineCount({ payload: convertedValue }));
  }
}
