import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FroalaOptions} from '../../froala.service';
import {Body} from '../../project/models/body'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent implements OnInit {
  body:Body
  @Output() emitter:EventEmitter<any>=new EventEmitter<any>();
  options: Object = {
    placeholderText: 'Edit Your Content Here!',
    toolbarInline: true,
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat'],
    events : {
      'froalaEditor.contentChanged' : (e, editor) =>{
        // console.log(editor.selection.get());
        this.emitter.emit({type:'form',data:e.target.innerHTML});
        
      }
    }
    
  };
  constructor() { 
this.body=Body.createsample();
    // console.log(this.body.forms)

  }


  print(){
    console.log(this.body.forms[0])
  }
  ngOnInit() {
    
  }

}
