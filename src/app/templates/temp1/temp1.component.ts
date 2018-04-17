import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
declare const $: any;
//  declare const $img: any;
declare var jQuery: any;
@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css']
})
export class Temp1Component implements OnInit ,AfterViewInit{

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    $(function() {
      $('header#froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'underline', 'undo', 'redo'],
        toolbarVisibleWithoutSelection: true
      });
    });
    $(function() {
      $('.froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'underline', 'undo', 'redo'],
        toolbarVisibleWithoutSelection: true
      });
    });
  
  
    $(function() {
      $('img#edit').froalaEditor({
        imageSizeButtons: ['imageBack']
      });
    });
  
    $(function() {
      $.FroalaEditor.DefineIcon('imageInfo', {NAME: 'info'});
      $.FroalaEditor.RegisterCommand('imageInfo', {
        title: 'Info',
        focus: false,
        undo: false,
        refreshAfterCallback: false,
        callback: function () {
          const $img = this.image.get();
          alert($img.attr('src'));
        }
      });
      $('img#edit').froalaEditor({
        imageEditButtons: ['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove']
      });
    });
  
    }

}
