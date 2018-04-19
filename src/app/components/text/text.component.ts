import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { Component, OnInit } from '@angular/core';
declare const $: any;
//  declare const $img: any;
declare var jQuery: any;

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
      
    $(function() {
      $('.froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'underline', 'undo', 'redo'],
        toolbarVisibleWithoutSelection: true
      });
    });
  
  
    $(function() {
      $('img.edit').froalaEditor({
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
