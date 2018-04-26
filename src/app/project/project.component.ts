import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

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


  constructor() { 

    
   }


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
