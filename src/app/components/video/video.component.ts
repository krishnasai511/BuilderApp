import { Component, OnInit } from '@angular/core';
import {FroalaOptions} from '../../froala.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers:[FroalaOptions]
})
export class VideoComponent implements OnInit {
   files:string;
   video;
   videoUrl:string;
   isvisible:boolean=true;
  constructor(private options:FroalaOptions) { }

  embed=function(videoUrl){
    return videoUrl.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");
  }

  attr(){
    this.videoUrl=this.video;
    this.videoUrl=this.embed(this.videoUrl);
    console.log(this.videoUrl);
    this.isvisible=false;
    
  }
  
  ngOnInit() {
  }

}
