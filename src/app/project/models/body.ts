

export interface BodySections{
    image: string;
    title: string;
    description: string
  
 }
 export class Body{
templatetype:string;
 title: string;
 description: string;
 bgColor:string;
 bgImg:string;
 bodysections: BodySections[];
 bodyAboutTitle:string;
 bodyAboutContent:string;
 footerTitle:string;
 footerData:string;
 constructor(templatetype ?: string ,title ?: string, description ?: string,bgColor ?: string,bgImg ?:string, 
    bodysection ?: BodySections[],bodyAboutTitle ?: string,bodyAboutContent ?: string,footerTitle ?: string,
    footerData ?: string )
{
  this.templatetype=templatetype
  this.title = title;
  this.description = description;
  this.bodysections = bodysection;
  this.bgColor=bgColor;
  this.bgImg=bgImg;
  this.bodyAboutTitle=bodyAboutTitle;
  this.bodyAboutContent=bodyAboutContent;
  this.footerData=footerData;
  this.footerTitle=footerTitle
}

 public static createsample(): Body{
     return new Body('First Template','Page Title','Page Description short way',"red","",[{image:'', title:'page 1',description:'Write Something'}],
    "About us","Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization."
,"Contact Me","")
 }
 
 }
 
 