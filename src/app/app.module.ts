import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents }  from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Temp2Component } from './templates/temp2/temp2.component';
import { Temp1Component } from './templates/temp1/temp1.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { TextComponent } from './components/text/text.component';
import { SaveTemp } from './project/service/save.service';
import { HttpModule } from '@angular/http';

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
   AppRoutingModule,
   NgbModule.forRoot(),
   FormsModule,
   HttpModule
],
entryComponents:[FormComponent,TextComponent],
  providers: [SaveTemp],
  bootstrap: [AppComponent]
})
export class AppModule { }
