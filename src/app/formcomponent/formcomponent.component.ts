import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-formcomponent',
//   template:`<div class="form" >
//   <div class="field">
//     <label>First Name</label>
//     <input type="text" name="first-name" placeholder="First Name" value="king" #sendFrom>
//   </div>
//   <div class="field">
//     <label>Last Name</label>
//     <input type="text" name="last-name" placeholder="Last Name">
//   </div>
//   <div class="field">
//     <div class="checkbox">
//       <input type="checkbox" tabindex="0" class="hidden">
//       <label>I agree to the Terms and Conditions</label>
//     </div>
//   </div>
//   <button class="button" type="submit">Submit</button>
// </div>`,
   templateUrl: './formcomponent.component.html',
//   template:`<div>
//   <h2>Hello {{name}}</h2>
//   <input #SendFrom value="viewChild works!!" />
// </div>`,
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit,AfterViewInit {

@ViewChild( 'SendFrom') sendData : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.sendData.nativeElement.value);
  }
  

}
