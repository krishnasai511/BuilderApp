import { Component, OnInit } from '@angular/core';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
//import { Header } from '../../project/models/header';
import {FroalaOptions} from '../../froala.service';
import { Body } from '../../project/models/body';
import { SaveTemp } from '../../project/service/save.service';
import { userid } from '../../shared/userid';
declare const $: any;
import axios from 'axios';
//  declare const $img: any;
declare var jQuery: any;
@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css'],
  providers:[FroalaOptions]

})
export class Temp2Component implements OnInit {
  id: string;
  data:Object;
  body:Body;
  flag:boolean=false;
  savebutton:boolean;
  CLOUDNIARY_URL='https://api.cloudinary.com/v1_1/saw/image/upload'
 CLOUDINARY_UPLODE_PRESET='rl9klvh3';
 selectedFile:any=null;
formData:any;
curl:any;
  constructor(private savetemp:SaveTemp ){
    this.id = userid(); 
  // this.fetchdata.datatoget();
  this.datatoget();
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
             // console.log(this.body);
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
         this.savetemp.getdata(this.data);
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

   image_change(event){
    // console.log(event);

     // this.savetemp.imgupload(imgdata);
     console.log('check');
     this.edit(event);
     
   }
   edit(event:any)
   {
     if(event){
     this.selectedFile = event.target.files[0];
     console.log(this.selectedFile);
     let t = this.selectedFile.type.split('/');
     if (t[0] == 'image' && this.selectedFile.size < 500000) {
       this.formData = new FormData();
       this.formData.append('file', this.selectedFile);
       this.formData.append('upload_preset', this. CLOUDINARY_UPLODE_PRESET);
       console.log("FormDta is :",this.formData);
       axios({
         // url:this.cUrl,
         url: this.CLOUDNIARY_URL,
         method: 'POST',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
         },
         data: this.formData
       }).then((res) => {
       
         // this.public_id = res.data.public_id;
         this.curl = res.data.secure_url
         console.log(this.curl);
       }).catch(err=>{
         console.log(err);
       })
     }
       else {
         alert("file should be image or size less than 5 Mb");
       }
        
        
     }
   }    
}
