import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/dashboard/home/home.component";

export const HOME_PATH = {path: "home", component: HomeComponent};

export const DASHBOARD_PATH = {
  path: 'dashboard',
  component: DashboardComponent,
  children: [HOME_PATH,
    {
      path: '**',
      redirectTo: '/dashboard/home',
      pathMatch: 'full'
    }
  ]
};

const DEFAULT = {path: '**', redirectTo: '/dashboard/home', pathMatch: 'full'};

export const appRoutes = [DASHBOARD_PATH, DEFAULT];
