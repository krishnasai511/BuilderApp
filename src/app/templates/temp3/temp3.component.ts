import { Component, OnInit } from '@angular/core';
import {FroalaOptions} from '../../froala.service';
import {FroalaEditorModule, FroalaViewModule, FroalaEditorDirective} from 'angular-froala-wysiwyg';
import { Body } from '../../project/models/body';
import { SaveTemp } from '../../project/service/save.service';
import { userid } from '../../shared/userid';
declare const $:any;
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

    addnavlist(){
      this.body.hnavlists.push({navlist: 'new '});
      console.log(this.body.hnavlists);
      
    }
  
}
