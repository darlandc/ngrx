import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ HomeComponent, CounterDisplayComponent],
  imports: [ CommonModule ],
  exports: [ HomeComponent, CounterDisplayComponent],
  providers: [],
})
export class SharedModule {}
