import { Component, OnInit } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule, FroalaEditorDirective } from 'angular-froala-wysiwyg';
import { SpecialEventsComponent } from '../special-events/special-events.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']

})
export class TemplatesComponent implements OnInit {
  welcome: boolean;
  template1: boolean;
  template2: boolean;
  template3:boolean;
  template4:boolean;
  constructor(){
    this.welcome=true;
   this.template1=false;
   this.template2=false;
  this.template3=false;
  this.template4=false;
  }
  ngOnInit() {
  }

 tempdata1(){
  console.log('template1');
  this.welcome=false;
  this.template1=true;
  this.template2=false;
  this.template3=false;
  this.template4=false;
 }

 tempdata2(){
  console.log('template2');
  this.welcome=false;
  this.template1=false;
  this.template2=true;
  this.template3=false;
  this.template4=false;
 }
 tempdata3(){
  console.log('template3');
  this.welcome=false;
  this.template1=false;
  this.template2=false;
  this.template3=true;
  this.template4=false;
 } 
 tempdata4(){
  console.log('template3');
  this.welcome=false;
  this.template1=false;
  this.template2=false;
  this.template3=false;
  this.template4=true;
 } 
 
}
