import { Component, OnInit } from '@angular/core';
import {FroalaOptions} from '../../froala.service';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { Body } from '../../project/models/body';
import { SaveTemp } from '../../project/service/save.service';
import { userid } from '../../shared/userid';
import axios from 'axios';
//declare const $:any;
//declare var axios ;
@Component({
  selector: 'app-temp3',
  templateUrl: './temp3.component.html',
  styleUrls: ['./temp3.component.css']
})
export class Temp3Component implements OnInit {
  id:string;
  bodyheaderform: boolean;
  editbodyheader:boolean;
  flag:boolean=false;
  body: Body;
  data:Object;
  visible=false;
 CLOUDNIARY_URL='https://api.cloudinary.com/v1_1/saw/image/upload'
 CLOUDINARY_UPLODE_PRESET='rl9klvh3';
 selectedFile:any=null;
formData:any;
curl:any;
  constructor(private savetemp: SaveTemp) { 
    this.editbodyheader = false;
    this.bodyheaderform = false;
    this.id = userid(); 
    this.datatoget();
  }
  public headimage: Object = {
    charCounterCount: false,
    toolbarInline:true,
    toolbarButtons: ['insertImage'],  
    toolbarVisibleWithoutSelection: true,

  };
  public options: Object = {
    toolbarInline:true, 
    placeholderText: 'Edit',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat','insertImage'],  
  };

  ngOnInit() {
   
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
          if(res[i].templatetype=="Third")
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

    addnavlist(){
      this.body.hnavlists.push({navlist: 'new '});
      console.log(this.body.hnavlists);
      
    }
    photo:string='http://res.cloudinary.com/saw/image/upload/v1525885923/kqzwgdkli6pblv6zlpxd.jpg';
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