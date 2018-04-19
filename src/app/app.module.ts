import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents }  from './app-routing.module';
 
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Temp2Component } from './templates/temp2/temp2.component';
import { Temp1Component } from './templates/temp1/temp1.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    routingComponents,
    Temp2Component,
    Temp1Component,
    MainComponent,
    FormComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routerroutes),
   FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
   ReactiveFormsModule ,
   AppRoutingModule
],
entryComponents:[FormComponent,TextComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
