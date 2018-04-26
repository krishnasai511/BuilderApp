import { Component, OnInit } from '@angular/core';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { Header } from '../../project/models/header';
import {FroalaOptions} from '../../froala.service';
import { Body } from '../../project/models/body';
declare const $: any;
//  declare const $img: any;
declare var jQuery: any;
@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css'],
  providers:[FroalaOptions]

})
export class Temp2Component implements OnInit {
  data:Object;
  header:Header;
  body:Body;
  constructor(){
    this.header = Header.createsample();
    this.body = Body.createsample();
  }
  addbodypages(){
    this.body.bodysections.push({image:'', title:'new page',description:'this to write about the new pages  short ways'})
    
    console.log(this.body.bodysections);
  }
  ngOnInit() {

  }

  public options: Object = {
    // placeholderText: 'Edit Your Content Here!',
      toolbarInline:true, 
      charCounterCount: false,
      toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat'],
      events:{
        'froalaEditor.contentChanged':function(e){
         console.log(e.target.innerText);
            }
        }
    };

    addnavlist(){
      this.header.navlists.push({navlist: 'new '});
      setTimeout(()=>{
        $('.froala-editor').froalaEditor({
          toolbarInline: true,
          charCounterCount: false,
          toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'underline', 'undo', 'redo'],
          toolbarVisibleWithoutSelection: true
        });
      }, 300)
      console.log(this.header.navlists);
      
    }

    changes(){
     setTimeout(() => {
        this.data={
            navheader:this.header.navheader,
            navlist:this.header.navlists,
            title:this.body.title,
            description:this.body.description,
            bodyAboutTitle:this.body.bodyAboutTitle,
            bodyAboutContent:this.body.bodyAboutContent,
            bodysection:this.body.bodysections,
            bgColor:this.body.bgColor,
            bgImg:this.body.bgImg
          };
         console.log(this.data);
      }, 200);  
  }

  color(){
    console.log(this.body.bgColor);
  }

}
