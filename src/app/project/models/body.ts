export interface BodySections{
    image: string;
    title: string;
    description: string;

 }
 export class Body{
id:string;
title: string;
 description: string;
 bodysections: BodySections[];
 bgColor:string;
 bgImg:string='../../assets/img1.jpg';
 constructor(title: string, description: string, bodysection: BodySections[]){
  this.title = title;
  this.description = description;
  this.bodysections = bodysection;
 }
  public static createsample(): Body{
     return new Body('Page Title','Page Description short way',
     [{image:'', title:'page 1',
        description:'this to write about the page 1 short ways',
    }])
 }
 
 }