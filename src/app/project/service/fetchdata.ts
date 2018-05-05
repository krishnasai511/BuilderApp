import { Injectable } from "@angular/core";
import { SaveTemp } from "./save.service";
import { userid } from "../../shared/userid";
import { Body } from "../models/body";


@Injectable()
export class FetchData{

   body:Body;
    id: string;
     constructor(private savetemp:SaveTemp){
         this.id=userid();
        // this.datatoget();
     }

datatoget(){
    this.savetemp.getdata(this.id).
    then((res)=>{
      console.log("edited data", res);
      if(res.length==0)
       {

        console.log("true");
        
      return this.body=Body.createsample();
     //  console.log(this.body);
       //this.changes();
      }
      else{
        for(let i=0;i<res.length;i++)
        {
          if(res[i].templatetype=="First")
          {
            console.log("hi");
          return  this.body=res[i];
           // console.log(this.body);
         }
         if(res[i].templatetype=="Second")
          {
            console.log("hi");
         return   this.body=res[i];
           // console.log(this.body);
         }
        //  if(res[i].templatetype=="First")
        //   {
        //     console.log("hi");
        //     this.body=res[i];
        //     console.log(this.body);
        //  }
        //  if(res[i].templatetype=="First")
        //   {
        //     console.log("hi");
        //     this.body=res[i];
        //     console.log(this.body);
        //  }

        }
    }
    })
  }
}