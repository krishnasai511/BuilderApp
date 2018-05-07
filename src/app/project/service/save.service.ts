import { Injectable } from "@angular/core";
import { Body } from "../models/body";
import { Header } from "../models/header";
import {  Http,HttpModule } from '@angular/http';
import 'rxjs/operator/toPromise';
@Injectable()
export class SaveTemp{
    // templateId:number=1;


constructor( private http: Http){}

  
adddata(values){
 
  console.log(values);
   this.http.post('http://localhost:3000/routes/saveRecord',values).
    toPromise().then((res)=>{
       console.log(res);
   });
}

getdata(values: string):Promise<any> {
    console.log(values);
    return this.http.get('http://localhost:3000/routes/checkid',{
        params:{
            'id': values
        }
     }).
      toPromise().then((res)=>{
          return res.json().data;
     });
  }

updatedata(data,id):Promise<any>{
    
 return  this.http.put('http://localhost:3000/routes/updatedata',data,{
        params:{
            'id':id
        }
    }).toPromise().then((res)=>{
        return res.json().data
    })
}

checkemail(email):Promise<any>{
   
    return  this.http.post('http://localhost:3000/routes/checkemail',{email})
    .toPromise().then((res)=>{
      return res.json();
    })
}

resetpassword(password,id):Promise<any>{
    
    return this.http.post('http://localhost:3000/routes/resetpassword',{password},{
        params:{
            'id':id
        }
    })
    .toPromise().then((res)=>{
        console.log(res);
    })
}


}

  