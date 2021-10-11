import { ApiService } from './../shared/services/api.service';
import { loadingEpisodes, setEpisodes } from './app.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodeEffectService {

  constructor(
    private actions$: Actions,
    private api: ApiService
  ){}

  loadEpisodes = createEffect(
    ()=> this.actions$.pipe(
      ofType(loadingEpisodes),
      switchMap(()=> this.api.fetchData()),
  ))
}
