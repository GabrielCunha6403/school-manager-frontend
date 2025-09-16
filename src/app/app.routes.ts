import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent)
    },
    {
        path: 'users/register',
        loadComponent: () => import('./pages/users/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'cursos',
        loadComponent: () => import('./pages/cursos/cursos.component').then(m => m.CursosComponent),
    },
    {
        path: 'cursos/register',
        loadComponent: () => import('./pages/cursos/register/register.component').then(m => m.RegisterComponent),
    },
    {
        path: 'cursos/:cdCurso/disciplinas',
        loadComponent: () => import('./pages/disciplinas/disciplinas.component').then(m => m.DisciplinasComponent)
    },
    {
        path: 'cursos/:cdCurso/disciplinas/register',
        loadComponent: () => import('./pages/disciplinas/register/register.component').then(m => m.RegisterComponent)
    },
];
