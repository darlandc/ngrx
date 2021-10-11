import { ListEpisodesComponent } from './components/list-episodes/list-episodes.component';
import { CounterIntputComponent } from './components/counter-input/counter-input.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    CounterDisplayComponent,
    CounterIntputComponent,
    ListEpisodesComponent
  ],
  imports: [CommonModule],
  exports: [HomeComponent, CounterDisplayComponent, CounterIntputComponent, ListEpisodesComponent],
  providers: [],
})
export class SharedModule {}
