import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Noticias } from './pages/noticias/noticias';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'noticias', component: Noticias },
];
