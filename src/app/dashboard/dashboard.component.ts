import { Component, OnInit } from '@angular/core';
import { Episode } from '../types/episode';
import { EpisodeService } from '../services/episode/episode.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  episodes: Episode[] = [];
 
  constructor(private heroService: EpisodeService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.getEpisodes()
      .subscribe(episodes => this.episodes = episodes);
  }
}
