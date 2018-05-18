import { Component, OnInit } from '@angular/core';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
//import { Header } from '../../project/models/header';
import {FroalaOptions} from '../../froala.service';
import { Body } from '../../project/models/body';
import { SaveTemp } from '../../project/service/save.service';
import { MainComponent } from '../../components/main/main.component';
import { userid } from '../../shared/userid';
import { ImageUplode } from '../../image.service';
declare const $: any;
import axios from 'axios';
//  declare const $img: any;
declare var jQuery: any;
@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css'],


})
export class Temp2Component implements OnInit {
  id: string;
  data:Object;
  body:Body;
  flag:boolean=false;
  savebutton:boolean;
  editbodyheader:boolean;
  bodyheaderform:boolean;
  component:Array<MainComponent>=[];
  visible=false;
  constructor(private savetemp:SaveTemp,private options:FroalaOptions,private editor :ImageUplode ){
    this.editbodyheader = false;
    this.bodyheaderform = false;
    this.id = userid(); 
    this.datatoget();
  }
  ngOnInit() {

  }

  // public options: Object = {
  //   // placeholderText: 'Edit Your Content Here!',
  //     toolbarInline:true, 
  //     charCounterCount: false,
  //     toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat'],
  //     events:{
  //       'froalaEditor.contentChanged':function(e){
  //        console.log(e.target.innerText);
  //           }
  //       }
  //   };

    addnavlist(){
      this.body.hnavlists.push({navlist: 'new '});
      setTimeout(()=>{
        $('.froala-editor').froalaEditor({
          toolbarInline: true,
          charCounterCount: false,
          toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'underline', 'undo', 'redo'],
          toolbarVisibleWithoutSelection: true
        });
      }, 300)
      console.log(this.body.hnavlists);
      
    }

    addbodypages(){
      this.body.bodysections.push({image:'', title:'new page',description:'this to write about the new pages  short ways'})
      
      console.log(this.body.bodysections);
    }


    datatoget(){
      this.savetemp.getdata(this.id).
      then((res)=>{
        console.log("edited data", res);
        if(res.length==0)
         {
  
          console.log("true");
          
         this.body=Body.createsample();

        console.log(this.body);
        this.savebutton=true;
         //this.changes();
        }
        else{
          for(let i=0;i<res.length;i++)
          {
          if(res[i].templatetype=="Second")
            {
              console.log("hi");
              this.body=res[i];
              this.flag=true;
              this.savebutton=false
            } }
          if(this.flag!==true){
            this.body=Body.createsample();
            this.flag=false;
            this.savebutton=false;
          }  
      }
      })
    }
  




    changes(){
     setTimeout(() => {
        this.data={
          templatetype:"Second",
          hbrandname:this.body.hbrandname,
          hnavlists:this.body.hnavlists,
          title:this.body.title,
          description:this.body.description,
          bodyAboutTitle:this.body.bodyAboutTitle,
          bodyAboutContent:this.body.bodyAboutContent,
          bodysections:this.body.bodysections,
          bgColor:this.body.bgColor,
          bgImg:this.body.bgImg,
          footerTitle:this.body.footerTitle,
          userhref: this.id
          };
         this.savetemp.adddata(this.data);
      }, 1000);  
  }
  update(){

    setTimeout(() => {
      this.data={
          templatetype:"Second",
          hbrandname:this.body.hbrandname,
          hnavlists:this.body.hnavlists,
          title:this.body.title,
          description:this.body.description,
          bodyAboutTitle:this.body.bodyAboutTitle,
          bodyAboutContent:this.body.bodyAboutContent,
          bodysections:this.body.bodysections,
          bgColor:this.body.bgColor,
          bgImg:this.body.bgImg,
          footerTitle:this.body.footerTitle,
          // userhref: this.id
  };

  this.savetemp.updatedata(this.data,this.body._id).then(()=>
{
  window.alert("data updated");
})
     
      }, 1000);

   }
   photo:string='http://res.cloudinary.com/saw/image/upload/v1525885923/kqzwgdkli6pblv6zlpxd.jpg';
   getmystyletemp2(){
   
     let style;
     if(this.editor.curl=='')
     {
        style ={
         'background-color':this.body.bgColor
       }
     }
     else {
        style={
          'background':this.editor.curl ? 'url('+this.editor.curl+')' : this.body.bgColor
       }
     } 
     return style;
   }
   image_change(event){
     console.log('check');
     this.editor.edit(event);
     this.getmystyletemp2();
     
   }
  
}
