<<<<<<< HEAD
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Main } from './models/MainModel';
import { Temp } from './service/Temp.service';
import { PageModel } from './models/pagemodel';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';

declare const $: any;
//  declare const $img: any;
declare var jQuery: any;


=======
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PageModel } from './models/pagemodel';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
declare const $: any;
//  declare const $img: any;
declare var jQuery: any;
>>>>>>> 956f1970a72f002f2cc437df5a3086bef7e85030

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

<<<<<<< HEAD
export class ProjectComponent implements OnInit,AfterViewInit {
  
@ViewChild('edit') Editor : ElementRef 

Page: PageModel;
state='status';
values:string;

  constructor() { 
    this.Page=PageModel.createPage();
    console.log(this.Page);
    this.values=this.Editor.nativeElement.innerHTML;
    console.log(this.values);
=======
  constructor( ) { }

 
 ngOnInit() {
>>>>>>> 956f1970a72f002f2cc437df5a3086bef7e85030
    
   }


//    setValues(){
//  localStorage.setItem(JSON.stringify(this.Editor) , this.values);
//  this.set();
// }
// set(){
// this.Editor.nativeElement.innerText=localStorage.getItem(JSON.stringify(this.Editor));
// }

  ngOnInit(){

  }
  
  



  
  
  
  
  
  
  ngAfterViewInit(){

    $(function() {
      $('.froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'underline', 'undo', 'redo'],
        toolbarVisibleWithoutSelection: true
      });
    });
  }
 

  }
