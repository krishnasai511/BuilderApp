import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  
})
export class WelcomeComponent implements OnInit {

  

show: boolean=false;
// forms=[1,2,3];


aclicked(){
    console.log();
  }
  constructor(private router: Router) { }

// ShowForm(){
//   this.show=!this.show;
// }

// AddForm(){
//   this.forms.push(
//     {

//     }
//   )
// }



  ngOnInit() {
  }

  moveToPro(){
    console.log("Trying to route");
   this.router.navigate(['./project']);
  }

}
