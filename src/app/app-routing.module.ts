import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'about', pathMatch: 'full', redirectTo: '/about' },
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  { path: 'landing',component:LandingComponent },
  { path: 'about',component:AboutComponent }
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }