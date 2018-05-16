import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {FroalaOptions} from '../../froala.service';
import axios from 'axios';
import { ImageUplode } from '../../image.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

 // @Output() emitter:EventEmitter<any>=new EventEmitter<any>();

  constructor(private editor : ImageUplode) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
      
  }
  image_change(event){
    // console.log(event);

     // this.savetemp.imgupload(imgdata);
     console.log('check');
     this.editor.edit(event);
     console.log(this.editor.curl)
   }
  
    public options: Object = {
           placeholderText: 'Edit Your Content Here!',
           toolbarInline: true,
           charCounterCount: false,
           toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat'],
       };
}
