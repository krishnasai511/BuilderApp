import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { Component, OnInit } from '@angular/core';
import {FroalaOptions} from '../../froala.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  providers:[FroalaOptions]
})
export class TextComponent implements OnInit {

  constructor(private options:FroalaOptions) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
      
  }

}
