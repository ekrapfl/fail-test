import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "fail",
    loadComponent: () => import("./fail.component").then((m) => m.FailComponent),
  },
  {
    path: '',
    redirectTo: 'fail',
    pathMatch: 'full',
  },
];
