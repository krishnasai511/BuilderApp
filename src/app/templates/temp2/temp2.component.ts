import { Component, OnInit } from '@angular/core';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
//import { Header } from '../../project/models/header';
import {FroalaOptions} from '../../froala.service';
import { Body } from '../../project/models/body';
import { SaveTemp } from '../../project/service/save.service';
import { userid } from '../../shared/userid';
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
  id: any;
  data:Object;
  //header:Header;
  body:Body;
  flag:boolean=false;
  constructor(private savetemp:SaveTemp ){
   // this.header = Header.createsample();
    this.body = Body.createsample();
    this.id=userid();
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

    changes(){
     setTimeout(() => {
        this.data={
          templatetype:"Second",
            navheader:this.body.hbrandname,
            navlist:this.body.hnavlists,
            title:this.body.title,
            description:this.body.description,
            bodyAboutTitle:this.body.bodyAboutTitle,
            bodyAboutContent:this.body.bodyAboutContent,
            bodysection:this.body.bodysections,
            bgColor:this.body.bgColor,
            bgImg:this.body.bgImg,
            footerTitle:this.body.footerTitle
          };
         this.savetemp.adddata(this.data);
      }, 1000);  
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
       //this.changes();
      }
      else{
        for(let i=0;i<res.length;i++)
        {
          if(res[i].templatetype=="First")
          {
            console.log("hi");

            this.body=res[i];
            this.flag=true;
           
         }}
         if(this.flag!==true){
           this.body=Body.createsample();
           this.flag=false;
         }

    }
    })

  }

}
