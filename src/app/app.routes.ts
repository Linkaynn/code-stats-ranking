import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CodeStatersComponent } from './components/dashboard/code-staters/code-staters.component';

export const HOME_PATH = { path: 'code-staters', component: CodeStatersComponent };

export const DASHBOARD_PATH = {
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    HOME_PATH,
    {
      path: '**',
      redirectTo: '/dashboard/code-staters',
      pathMatch: 'full'
    }
  ]
};

const DEFAULT = { path: '**', redirectTo: '/dashboard/code-staters', pathMatch: 'full' };

export const appRoutes = [DASHBOARD_PATH, DEFAULT];
