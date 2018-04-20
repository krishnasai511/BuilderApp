import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import {  Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TemplatesComponent } from "./templates/templates.component";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

const routerroutes : Routes =[
    {
      path:"" ,component: TemplatesComponent, pathMatch: 'full'
    },
    {
      path:"signup" , component:SignupComponent
    },
     {
       path:"login", component:LoginComponent
    }
    // {
    //   path:"template",component:TemplatesComponent
    // }
  ];


@NgModule({
    imports: [RouterModule.forRoot(routerroutes), FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()],
    exports: [RouterModule]
})

 export class AppRoutingModule{


 }
 export const routingComponents=[WelcomeComponent,SignupComponent,LoginComponent,TemplatesComponent]