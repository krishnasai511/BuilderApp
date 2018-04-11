import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';
import { HeaderComponent } from './project/parts/header/header.component';
import { FooterComponent } from './project/parts/footer/footer.component';
import { TextareaComponent } from './project/parts/textarea/textarea.component';
import { ButtonsComponent } from './project/parts/buttons/buttons.component';
import { HomeComponent } from './project/pages/home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';

const routerroutes : ModuleWithProviders = RouterModule.forRoot([
  {
    path:"" ,component: WelcomeComponent
  },

  {
    path:"signup" , component:SignupComponent
  },
   {
     path:"login", component:LoginComponent
  }
]);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TextareaComponent,
    ButtonsComponent,
    HomeComponent,
    WelcomeComponent,
    ProjectComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,routerroutes,
   FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
   ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
