import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent),
        children: [
            {
                path: ':cdUser/detail',
                loadComponent: () => import('./pages/users/detail/detail.component').then(m => m.DetailComponent),
            }
        ]
    },
    {
        path: 'users/register',
        loadComponent: () => import('./pages/users/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'users/:cdUser/edit',
        loadComponent: () => import('./pages/users/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'cursos',
        loadComponent: () => import('./pages/cursos/cursos.component').then(m => m.CursosComponent),
        children: [
            {
                path: ':cdCurso/detail',
                loadComponent: () => import('./pages/cursos/detail/detail.component').then(m => m.DetailComponent),
            }
        ]
    },
    {
        path: 'cursos/register',
        loadComponent: () => import('./pages/cursos/register/register.component').then(m => m.RegisterComponent),
    },
    {
        path: 'cursos/:cdCurso/disciplinas',
        loadComponent: () => import('./pages/disciplinas/disciplinas.component').then(m => m.DisciplinasComponent),
        children: [
            {
                path: ':cdDisciplina/detail',
                loadComponent: () => import('./pages/disciplinas/detail/detail.component').then(m => m.DetailComponent),
            }
        ]
    },
    {
        path: 'cursos/:cdCurso/disciplinas/register',
        loadComponent: () => import('./pages/disciplinas/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'cursos/:cdCurso/disciplinas/:cdDisciplina/edit',
        loadComponent: () => import('./pages/disciplinas/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'cursos/:cdCurso/matriz-curricular',
        loadComponent: () => import('./pages/matriz-curricular/matriz-curricular.component').then(m => m.MatrizCurricularComponent)
    },
];
