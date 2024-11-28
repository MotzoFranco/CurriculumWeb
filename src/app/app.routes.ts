import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta comodín para manejar rutas no encontradas
];
