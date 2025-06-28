import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Matches } from './pages/matches/matches';
import { EditMatchTs } from './pages/edit-match';
import { MatchDetails } from './pages/match-details'

export const routes: Routes = [
    { path: 'login', component: Login},
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'register', component: Register},
    { path: 'matches', component: Matches},
    { path: 'edit/:id', component: EditMatchTs},
    { path: 'matches/:id', component: MatchDetails},
    { path: '', redirectTo: 'login', pathMatch:'full'}
];
