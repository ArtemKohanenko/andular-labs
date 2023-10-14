import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Location } from '@angular/common';
import { Episode } from '../types/episode';
import { EpisodeService } from '../services/episode/episode.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private location: Location
  ) {}

  @Input() episode?: Episode;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const strId = this.route.snapshot.paramMap.get('id')
    const id = strId? +strId : 0;
    this.episodeService.getEpisode(id).subscribe(episode => this.episode = episode);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.episodeService.updateHero(this.episode).subscribe(() => this.goBack());
  }
}
