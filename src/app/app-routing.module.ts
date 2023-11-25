import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContainerComponent } from './main-container/main-container.component';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';

const routes: Routes = [
  { path: 'topics', component: MainContainerComponent },
  { path: 'portfolio', component: MainPortfolioComponent },
  { path: 'play', component: PlayGroundComponent },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
