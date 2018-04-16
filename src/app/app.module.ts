import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents }  from './app-routing.module';
 
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';
import { HeaderComponent } from './project/parts/header/header.component';
import { FooterComponent } from './project/parts/footer/footer.component';
import { TextareaComponent } from './project/parts/textarea/textarea.component';
import { ButtonsComponent } from './project/parts/buttons/buttons.component';
import { HomeComponent } from './project/pages/home/home.component';
// import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectComponent } from './project/project.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { Temp2Component } from './templates/temp2/temp2.component';
import { Temp1Component } from './templates/temp1/temp1.component';
//import { TemplatesComponent } from './templates/templates.component';

// const routerroutes : Routes=[
//   {
//     path:"" ,component: WelcomeComponent
//   },

//   {
//     path:"signup" , component:SignupComponent
//   },
//    {
//      path:"login", component:LoginComponent
//   }
// ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TextareaComponent,
    ButtonsComponent,
    HomeComponent,
    // WelcomeComponent,
    ProjectComponent,
    // LoginComponent,
    // SignupComponent,
    routingComponents,
    FormsComponent,
    Temp2Component,
    Temp1Component
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routerroutes),
   FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
   ReactiveFormsModule ,
   AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
