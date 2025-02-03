import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
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
    component: SettingsComponent,
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
    ],
  },
  {
    outlet: 'profile',
    path: 'home',
    component: ProfileComponent,
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
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
