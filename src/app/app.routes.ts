import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProposComponent } from './propos/propos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `home` (bonne pratique)
    {path:'home',component:HomeComponent},
    {path:'propos', component:ProposComponent}
];
