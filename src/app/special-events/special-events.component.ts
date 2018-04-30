import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { EventService } from '../project/service/event.service';
import { userid } from '../shared/userid';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  id: string;
  temp:boolean;
  specialEvents = [];
@Output() temp1=new EventEmitter<boolean>();
@Output()  temp2=new EventEmitter<boolean>();
  


  constructor(private _eventService: EventService,
              private _router: Router) {
               this.id= userid();
                this.temp=true;
               console.log("user id",this.id);
               }
  aclicked1(){
  
     console.log("clicked1");
     this.temp1.emit(true);
   }  

   aclicked2(){
    this.temp2.emit(true);
       }  
//         aclicked3(){
// this.temp3.emit(this.temp);
//    } 
//  aclicked4(){
//    this.temp4.emit(this.temp);
//   }  
//        aclicked5(){
//         this.temp5.emit(this.temp);
//            }  
//            aclicked6(){
//             this.temp6.emit(this.temp);
//                }  
        
  ngOnInit() {
    // this._eventService.getSpecialEvents()
    //   .subscribe(
    //     res => this.specialEvents = res,
    //     err => {
    //       if( err instanceof HttpErrorResponse ) {
    //         if (err.status === 401) {
    //           this._router.navigate(['/login'])
    //         }}})}
    var log=localStorage.getItem("token");
  
    if(!log)
    {
      
    }
    else{
     this._router.navigate(['/special'])
    }
  }
  }


