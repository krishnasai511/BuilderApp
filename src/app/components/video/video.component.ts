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
  constructor(private options:FroalaOptions) { }

  attr(){
    this.videoUrl=this.video;

    console.log(JSON.parse(this.videoUrl));
    this.getUrlVars(this.videoUrl)
    
  }
  getUrlVars(url) {
    var hash;
    var myJson = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        myJson[hash[0]] = hash[1];
    }
    console.log('hohahahahh', myJson);
}
  ngOnInit() {
  }

}
