import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {FroalaOptions} from '../../froala.service';
import axios from 'axios';
// import { ImageUplode } from '../../image.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],

})
export class TextComponent implements OnInit {
  bgcolor:any;
 // @Output() emitter:EventEmitter<any>=new EventEmitter<any>();

  constructor() { 
  
  }

  closed(uuu){
    console.log("my Color is"+this.bgcolor)
  }
  ngOnInit() {
    console.log(this.bgcolor);
  }
  ngAfterViewInit() {
      
  }
  // image_change(event){
  //    console.log('checktext');
  //    this.editor.edit(event);
  //    console.log(this.editor.curl)
  //  }
  
    public options: Object = {
           placeholderText: 'Edit Your Content Here!',
           toolbarInline: true,
           charCounterCount: false,
           toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat'],
       };
       
      //  color(bgcolor){
      //    console.log('color'+bgcolor)
      //  }
}
