import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PageModel } from './models/pagemodel';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
declare const $: any;
//  declare const $img: any;
declare var jQuery: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

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
