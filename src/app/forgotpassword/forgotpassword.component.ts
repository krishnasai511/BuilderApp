import { Component, OnInit } from '@angular/core';
import { SaveTemp } from '../project/service/save.service';



@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  providers:[SaveTemp]
})
export class ForgotpasswordComponent {
email:String;
Password:any;
mailexists:boolean=false;
visible:boolean=true;
_id:String;
  constructor(private mail : SaveTemp) {
    
   }

   checking(){
    this.mail.checkemail(this.email).then((res)=>{
       if(res==null){
        
        window.alert("Wrong Email!!")
        
       }
       else{
     console.log(res._id);
         this._id=res._id
         this.mailexists=true;
         this.visible=false;
       }
    })
   }

   setPass(){

    if(this.Password==null){
      window.alert("please enter something!!")
    }
    else{
      this.ResetPassword()
    }
   }

   ResetPassword(){

   console.log(this.Password);
   
  this.mail.resetpassword(this.Password,this._id).then(()=>{
    window.alert("Password Updated!!")
  })
   

   }


  
}
