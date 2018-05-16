import { Injectable } from "@angular/core";
import axios from 'axios';


@Injectable()
export class ImageUplode{
    CLOUDNIARY_URL='https://api.cloudinary.com/v1_1/saw/image/upload'
    CLOUDINARY_UPLODE_PRESET='rl9klvh3';
    selectedFile:any=null;
    formData:any;
    curl:any;
    try:string='try to edit';
    edit(event:any)
    {
        console.log("HII1");
      if(event){
        
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      let t = this.selectedFile.type.split('/');
      console.log(t);
    if (t[0] == 'image' && this.selectedFile.size < 500000) {
          
        this.formData = new FormData();
        this.formData.append('file', this.selectedFile);
        this.formData.append('upload_preset', this. CLOUDINARY_UPLODE_PRESET);
        console.log("FormDta is :",this.formData);
        axios({
          // url:this.cUrl,
          url: this.CLOUDNIARY_URL,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: this.formData
        }).then((res) => {
        
          // this.public_id = res.data.public_id;
          this.curl = res.data.secure_url
          console.log("hellllll",this.curl);
        }).catch(err=>{
          console.log(err);
        })
      }
        else {
          alert("file should be image or size less than 5 Mb");
        }
         
         
      }
    }    
}
