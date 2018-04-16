import { Component, OnInit} from '@angular/core';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  welcome: boolean;
  temp1: boolean;
  temp2: boolean;
  title = 'app';
  constructor(){
    this.welcome=true;
   this.temp1=false;
   this.temp2=false;
  }
  ngOnInit() {

    
 }
//  notifyme(){
//    console.log('template');
//  }

 tempdata1(){
  console.log('template1');
  this.welcome=false;
  this.temp1=true;
  this.temp2=false;
 }
 tempdata2(){
  console.log('template2');
  this.welcome=false;
  this.temp1=false;
  this.temp2=true;
 }
}
