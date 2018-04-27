// import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-welcome',
//   templateUrl: './welcome.component.html',
//   styleUrls: ['./welcome.component.css'],
  
// })
// export class WelcomeComponent implements OnInit  {
//   @Output()

//   temp1 = new EventEmitter();
//   @Output() 

//   temp2 = new EventEmitter();
//   aclicked1(){
//       // this.notify.emit((<HTMLInputElement>event.target).value);
//       console.log("aclicked1");
//       this.temp1.emit(this.temp);
//     }

//     aclicked2(){
//         // this.notify.emit((<HTMLInputElement>event.target).value);
//         console.log("aclicked2");
//         this.temp2.emit(this.temp);
//       }


//   // @Output() notify:EventEmitter<string>=new EventEmitter<string>();
//   // add:boolean=false;
//   // forms=[1,2,3];
//   // onadd(){
//   //   this.add=!this.add;
//   // }
//   // aclicked(event : Event){
//   //   this.notify.emit((<HTMLInputElement>event.target).value);
//   //   console.log((<HTMLInputElement>event.target).value);
//   // }
//   temp: boolean;
   
//   constructor(private router: Router) { 
//     this.temp = true;
//   }

// // ShowForm(){
// //   this.show=!this.show;
// // }

// // AddForm(){
// //   this.forms.push(
// //     {

// //     }
// //   )
// // }



//   ngOnInit() {
//   }

//   moveToPro(){
//     console.log("Trying to route");
//    this.router.navigate(['./project']);
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }


}
