import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

const routes:Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'episodes', component: EpisodesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: EpisodeDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
