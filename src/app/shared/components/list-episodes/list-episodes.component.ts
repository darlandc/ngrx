import { IAppState, setEpisodes } from './../../../store/app.state';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
})
export class ListEpisodesComponent implements OnInit {
  episodes: any;
  episodes$ = this.store
    .select('app')
    .pipe(map((app) => app.episodes))
    .subscribe({
      next: (episodes) => {
        if (episodes.length === 0) {
          this.api.fetchData().subscribe({
            next: (res) => {
              this.store.dispatch(setEpisodes({ payload: res.results }));
            },
          });
        }
      },
    });

  constructor(
    private api: ApiService,
    private store: Store<{ app: IAppState }>
  ) {}

  ngOnInit(): void {
    // this.api.fetchData().subscribe({
    //   next: (res) => {
    //     this.episodes = res.results;
    //     this.store.dispatch(
    //       setEpisodes({
    //         payload: res,
    //       })
    //     );
    //   },
    // });
  }
}
