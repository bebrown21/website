import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlatformComponent } from './components/settings/platform/platform.component';
import { PersonalComponent } from './components/settings/personal/personal.component';
import { ThirdPartyComponent } from './components/settings/third-party/third-party.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    outlet: 'settings',
    path: 'home',
    loadComponent: () =>
      import('./components/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
    children: [
      {
        path: 'platform',
        component: PlatformComponent,
      },
      {
        path: 'personal',
        component: PersonalComponent,
      },
      {
        path: 'third-party',
        component: ThirdPartyComponent,
      },
      { path: '**', redirectTo: 'platform' },
    ],
  },
  {
    outlet: 'profile',
    path: 'home',
    loadComponent: () =>
      import('./components/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
    children: [
      {
        path: 'platform',
        component: PlatformComponent,
      },
      {
        path: 'personal',
        component: PersonalComponent,
      },
      {
        path: 'third-party',
        component: ThirdPartyComponent,
      },
      { path: '**', redirectTo: 'platform' },
    ],
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./components/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: 'portfolio/:id/details',
    loadComponent: () =>
      import('./components/portfolio/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
