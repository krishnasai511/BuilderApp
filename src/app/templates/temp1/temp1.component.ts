import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { Header } from '../../project/models/header';
import { Body } from '../../project/models/body';
import {FroalaOptions} from '../../froala.service';
import { SaveTemp } from '../../project/service/save.service';
declare const $: any;
//  declare const $img: any;
declare var jQuery: any;
@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css'],
  providers:[FroalaOptions]
})
export class Temp1Component implements OnInit ,AfterViewInit{
  data:Object;
  bodyheaderform: boolean;
  editbodyheader:boolean;
  title = 'app';
  header: Header
  body: Body
  visible=false;
 constructor(private savetemp: SaveTemp){
    this.header = Header.createsample();
    this.body = Body.createsample();
    this.editbodyheader = false;
    this.bodyheaderform = false;
  }
   

  public options: Object = {
    // placeholderText: 'Edit Your Content Here!',
    toolbarInline:true, 
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat'],
    // events:{
    //   'froalaEditor.contentChanged':function(e){
    //     console.log(e.target.innerText);
    //   }
    // }
};

// changed(event : any ){
// console.log(JSON.stringify(event));
// }

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
  // editmorebodyheader(){
  //   this.editbodyheader=true;
  // }
  // bodyeditheaderform(){
  //   this.bodyheaderform = true
  // }
 
    
   
  addbodypages(){
    this.body.bodysections.push({image:'', title:'new page',description:'this to write about the new pages  short ways'})
    // setTimeout(()=>{
    //   $('.froala-editor').froalaEditor({
    //     toolbarInline: true,
    //     charCounterCount: false,
    //     toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'underline', 'undo', 'redo'],
    //     toolbarVisibleWithoutSelection: true
    //   });
    // }, 300)
    console.log(this.body.bodysections);
  }
  menuedit()
  {
    setTimeout(()=>{
      $('.froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'underline', 'undo', 'redo'],
        toolbarVisibleWithoutSelection: true,
      });
    }, 500)
    console.log('froala-editior add');
  }
  openedit(){
    this.visible=true;
    
  }
  // // makeVisible(){
  //   this.visible=false;
  // }

  ngOnInit() {
  }
  changes(){

    setTimeout(() => {
      this.data={
          templatetype:"First",
          navheader:this.header.navheader,
          navlists:this.header.navlists,
          title:this.body.title,
          description:this.body.description,
          bodyAboutTitle:this.body.bodyAboutTitle,
          bodyAboutContent:this.body.bodyAboutContent,
          bodysections:this.body.bodysections,
          bgColor:this.body.bgColor,
          bgImg:this.body.bgImg,
          footerTitle:this.body.footerTitle
        
  };

  this.savetemp.getdata(this.data)
      
      }, 1000);  
   }
  
  
   ngAfterViewInit() {
        
    }

}
