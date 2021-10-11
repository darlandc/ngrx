import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html'
})
export class CounterDisplayComponent implements OnInit {

  @Input() counter = 0;

  constructor() { }

  ngOnInit(): void { }
}
