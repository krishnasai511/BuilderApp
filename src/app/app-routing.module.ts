import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import {  Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routerroutes : Routes =[
    {
      path:"" ,component: WelcomeComponent, pathMatch: 'full'
    },
  
    {
      path:"signup" , component:SignupComponent
    },
     {
       path:"login", component:LoginComponent
    }
  ];


@NgModule({
    imports: [RouterModule.forRoot(routerroutes)],
    exports: [RouterModule]
})

 export class AppRoutingModule{


 }
 export const routingComponents=[WelcomeComponent,SignupComponent,LoginComponent]