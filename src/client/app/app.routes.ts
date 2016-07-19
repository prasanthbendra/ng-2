import { provideRouter, RouterConfig } from '@angular/router';

import { SigninRoutes } from './+signin/index';
import { RightpageRoutes } from './+rightpage/index';
import { LeftpageRoutes } from './+leftpage/index';
import { ContactRoutes } from './+contact/index';
import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...ContactRoutes,
  ...LeftpageRoutes,
  ...RightpageRoutes,
  ...SigninRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
