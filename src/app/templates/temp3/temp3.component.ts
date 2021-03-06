import { Component, OnInit } from '@angular/core';
import {FroalaOptions} from '../../froala.service';
// import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { Body } from '../../project/models/body';
import { SaveTemp } from '../../project/service/save.service';
import { userid } from '../../shared/userid';
import axios from 'axios';
//declare const $:any;
//declare var axios ;
import { ImageUplode } from '../../image.service';

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
  constructor(private savetemp: SaveTemp,private editor :ImageUplode) { 
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
    getmystyletemp3(){
    
      let style;
      if(this.editor.curl=='')
      {
         style ={
          'background-image':this.photo
        }
      }
      else {
         style={
           'background-image':this.editor.curl ? 'url('+this.editor.curl+')' : 'url('+this.photo+')'
        }
      } 
      return style;
    }
    image_change(event){
      console.log('check');
      this.editor.edit(event);
      this.getmystyletemp3();
      
    }
   
  }