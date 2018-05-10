import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AuthGuard } from '../project/service/auth.guard';
import { SpecialEventsComponent } from '../special-events/special-events.component';

const temproutes: Routes = [
  {
    path: 'welcome',
    canActivate: [AuthGuard],
    component: WelcomeComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(temproutes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
