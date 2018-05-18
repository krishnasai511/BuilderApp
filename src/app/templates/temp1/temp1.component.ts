import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Body } from '../../project/models/body';
import { FroalaOptions } from '../../froala.service';
import { SaveTemp } from '../../project/service/save.service';
import { userid } from '../../shared/userid';
import { MainComponent } from '../../components/main/main.component';
import axios from 'axios';
import { ImageUplode } from '../../image.service';

declare const $:any;
declare var jQuery: any;
@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css'],
  providers: [FroalaOptions]
})
export class Temp1Component  {
  id: string;
  data:Object;
  flag:boolean=false;
  bodyheaderform: boolean;
  editbodyheader: boolean;
  title = 'app';
  component:Array<MainComponent>=[];
  body: Body;
  visible=false;
  savebutton:boolean;

 constructor(private savetemp: SaveTemp,private options:FroalaOptions,private editor :ImageUplode){
 
    this.editbodyheader = false;
    this.bodyheaderform = false;
    this.id = userid();
    this.datatoget();
   
      }
  addnavlist() {
    this.body.hnavlists.push({ navlist: 'new ' });
    setTimeout(() => {
      $('.froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color',
         'emoticons', 'underline', 'undo', 'redo'],
        toolbarVisibleWithoutSelection: true
      });
    }, 300);
    console.log(this.body.hnavlists);

  }
  // editmorebodyheader(){
  //   this.editbodyheader=true;
  // }
  // bodyeditheaderform(){
  //   this.bodyheaderform = true
  // }



  addbodypages() {
    this.body.bodysections.push({ image: '', title: 'new page', description: 'this to write about the new pages  short ways' });

    console.log(this.body.bodysections);
  }
  menuedit() {
    setTimeout(() => {
      $('.froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'strikeThrough', 'fontFamily', 'fontSize', '|', 'color',
         'emoticons', 'underline', 'undo', 'redo'],
        toolbarVisibleWithoutSelection: true,
      });
    }, 500);
    console.log('froala-editior add');
  }
  
  // // makeVisible(){
  //   this.visible=false;
  // }

 

  datatoget() {
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
          if(res[i].templatetype=="First")
          {
            console.log("hi");

            this.body=res[i];
            this.savebutton=false;
            this.flag=true;
           
         }}
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
          templatetype:"First",
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
;
  this.savetemp.adddata(this.data)
     
      }, 1000);  
   }
  
   update(){

    setTimeout(() => {
      this.data={
          templatetype:"First",
          hbrandname:this.body.hbrandname,
          hnavlists:this.body.hnavlists,
          title:this.body.title,
          description:this.body.description,
          bodyAboutTitle:this.body.bodyAboutTitle,
          bodyAboutContent:this.body.bodyAboutContent,
          bodysections:this.body.bodysections,
          bgColor:this.body.bgColor,
          bgImg:this.editor.curl,
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
   getmystyletemp1(){
   
     let style;
     if(this.editor.curl=='')
     {
        style ={
         'background-color':this.body.bgImg
       }
     }
     else {
        style={
          'background':this.editor.curl ? 'url('+this.editor.curl+')' : 'url('+this.body.bgImg+')'
          
       }
       console.log(this.body.bgImg)
       console.log(this.editor.curl)
     } 
     return style;
   }
image_change(event){
     console.log('checktemp1');
     this.editor.edit(event); 
     this.body.bgImg=this.editor.curl;
     this.getmystyletemp1();

    
   }
  
}
