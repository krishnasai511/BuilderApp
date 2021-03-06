import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Temp2Component } from './templates/temp2/temp2.component';
import { Temp1Component } from './templates/temp1/temp1.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { TextComponent } from './components/text/text.component';
import { SaveTemp } from './project/service/save.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './project/service/auth.service';
import { AuthGuard } from './project/service/auth.guard';
import { EventService } from './project/service/event.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './project/service/token-interceptor.service';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TemplatesComponent } from './templates/templates.component';
import { Temp3Component } from './templates/temp3/temp3.component';


import { VideoComponent } from './components/video/video.component';
import { SafePipe } from './safe.pipe';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { Temp4Component } from './templates/temp4/temp4.component';
import { FroalaOptions } from './froala.service';
import { Temp5Component } from './templates/temp5/temp5.component';
import { ImageUplode } from './image.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    SignupComponent,
    WelcomeComponent,
    LoginComponent,
    Temp2Component,
    Temp1Component,
    MainComponent,
    FormComponent,
    TextComponent,
    EventsComponent,
    SpecialEventsComponent,
    TemplatesComponent,
    Temp3Component,
    VideoComponent,
    SafePipe,
    ForgotpasswordComponent,
    Temp4Component,
    Temp5Component
  ],
  imports: [
    BrowserModule,
   FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
   ReactiveFormsModule ,
   AppRoutingModule,
   HttpModule,
   FormsModule,
   HttpClientModule,
  
],
entryComponents:[FormComponent,TextComponent,VideoComponent],
  providers: [AuthService,AuthGuard, EventService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    SaveTemp,FroalaOptions,
  ImageUplode],
  bootstrap: [AppComponent],

})
export class AppModule { }
