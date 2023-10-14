import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../services/episode/episode.service';
import { Episode } from '../types/episode';
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})

export class EpisodesComponent implements OnInit{
  episodes?: Episode[];

  constructor(private episodeService: EpisodeService) {}

  getEpisodes(): void {
    this.episodeService.getEpisodes()
      .subscribe(episodes => this.episodes = episodes);
  }

  add(name: string, pictureLink?: string, description?: string): void {
    name = name.trim();
    pictureLink = pictureLink?.trim();
    description = description?.trim();
    if (!name) {return;}
    this.episodeService.addHero(
      {
        name: name,
        thumbnail_url: pictureLink,
        description: description
      } as Episode)
    .subscribe(episode => {
      this.episodes?.push(episode);
    });
  }

  ngOnInit(): void {
    this.getEpisodes();
  }
}
