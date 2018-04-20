
export interface BodySections{
    image: string;
    title: string;
    description: string
  
 }
 export class Body{

 title: string;
 description: string;
 bgColor:string;
 bgImg:string;
 bodysections: BodySections[];
 bodyAboutTitle:string;
 bodyAboutContent:string;
 constructor(title ?: string, description ?: string,bgColor ?: string,bgImg ?:string, 
    bodysection ?: BodySections[],bodyAboutTitle ?: string,bodyAboutContent ?: string )
{
  this.title = title;
  this.description = description;
  this.bodysections = bodysection;
  this.bgColor=bgColor;
  this.bgImg=bgImg;
  this.bodyAboutTitle=bodyAboutTitle;
  this.bodyAboutContent=bodyAboutContent;
}

 public static createsample(): Body{
     return new Body('Page Title','Page Description short way',"skyblue","",[{image:'', title:'page 1',description:'Write Something'}],
    "About us","Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.")
 }
 
 }
 
 