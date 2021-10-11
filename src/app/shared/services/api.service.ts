import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = {
    episodes: "https://rickandmortyapi.com/api/episode"
  };

  constructor(private http: HttpClient){
      this.fetchData();
  }

  fetchData(): Observable<any> {
    return this.http.get(this.api.episodes, {});
  }
}
