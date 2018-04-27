import { Component, OnInit} from '@angular/core';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
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

  constructor(){
    this.welcome=true;
   this.template1=false;
   this.template2=false;
  
  }
  ngOnInit() {
}

 tempdata1(){
  console.log('template1');
  this.welcome=false;
  this.template1=true;
  this.template2=false;
 }

 tempdata2(){
  console.log('template2');
  this.welcome=false;
  this.template1=false;
  this.template2=true;
 } 
 
}
