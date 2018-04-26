import { Injectable } from "@angular/core";
import { Body } from "../models/body";
import { Header } from "../models/header";
import {  Http,HttpModule } from '@angular/http';


@Injectable()
export class SaveTemp{
    // templateId:number=1;


constructor( private http: Http){}

  
getdata(values){
 
  console.log(values);
   this.http.post('http://localhost:3000/routes/saveRecord',values).
    toPromise().then((res)=>{
       console.log(res);
   });
}
}