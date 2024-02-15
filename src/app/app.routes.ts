import { Routes } from '@angular/router';

export const routes: Routes = [
  {path : '', loadComponent: async () => (await import('./components/card/card.component')).CardComponent},
  {path: 'card-detail/:id', loadComponent: async () => (await import('./components/card-detail/card-detail.component')).CardDetailComponent},
];
