import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { NewLeadComponent } from './new-lead/new-lead.component';
import { CompletedLeadComponent } from './completed-lead/completed-lead.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LogoutComponent } from '../logout/logout.component';
import { RouteGardService } from '../service/route-gard.service';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

export const MaterialRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'button',
    component: ButtonsComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'grid',
    component: GridComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'lists',
    component: ListsComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'tabs',
    component: TabsComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'stepper',
    component: StepperComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'expansion',
    component: ExpansionComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'chips',
    component: ChipsComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'toolbar',
    component: ToolbarComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'progress',
    component: ProgressComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'dialog',
    component: DialogComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'snackbar',
    component: SnackbarComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'slider',
    component: SliderComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'new-lead',
    component: NewLeadComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'completed-lead',
    component: CompletedLeadComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGardService]
  },
  {
    path: 'editProfile', children:
      [
        { path: ':id', component: EditProfileComponent },
      ]
  },
];
