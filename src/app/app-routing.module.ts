// import { WelcomeComponent } from "./welcome/welcome.component";
// import { SignupComponent } from "./signup/signup.component";
// import { LoginComponent } from "./login/login.component";
// import {  Routes, RouterModule } from "@angular/router";
// import { NgModule } from "@angular/core";
// import { TemplatesComponent } from "./templates/templates.component";
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// const routerroutes : Routes =[
//     {
//       path:"" ,component: TemplatesComponent, pathMatch: 'full'
//     },
//     {
//       path:"signup" , component:SignupComponent
//     },
//      {
//        path:"login", component:LoginComponent
//     }
//     // {
//     //   path:"template",component:TemplatesComponent
//     // }
//   ];


// @NgModule({
//     imports: [RouterModule.forRoot(routerroutes), FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()],
//     exports: [RouterModule]
// })

//  export class AppRoutingModule{


//  }
//  export const routingComponents=[WelcomeComponent,SignupComponent,LoginComponent,TemplatesComponent]

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './project/service/auth.guard';
import { TemplatesComponent } from './templates/templates.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component : WelcomeComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: TemplatesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
