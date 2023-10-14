import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from '../message/message.service';
import { Observable, of } from 'rxjs';
import { Episode } from 'src/app/types/episode';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getEpisodes():Observable<Episode[]> {
    this.messageService.add('HeroService: fetched heroes')
    return this.http.get<Episode[]>(`api/episodes`).pipe(
      tap(_ => this.log(`fetched episodes`)),
      catchError(this.handleError<Episode[]>('getEpisodesOnPage', []))
    );
  }

  getEpisode(id: number): Observable<Episode> {
    return this.http.get<Episode>(`api/episodes/${id}`).pipe(
      tap(_ => this.log(`fetched episode id=${id}`)),
      catchError(this.handleError<Episode>(`getEpisode id=${id}`))
    )
  }

  updateHero(episode?: Episode): Observable<any> {
    return this.http.put('api/episodes', episode, httpOptions)
  }

  addHero (hero: Episode): Observable<Episode> {
    return this.http.post<Episode>('api/episodes', hero, httpOptions).pipe(
      tap((newEpisode: Episode) => this.log(`added episode w/ id=${newEpisode.id}`)),
      catchError(this.handleError<Episode>('addEpisode'))
    );
  }
  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`EpisodeService: ${message}`)
  }
}
