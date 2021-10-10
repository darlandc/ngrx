import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html'
})
export class CounterDisplayComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void { }
}
