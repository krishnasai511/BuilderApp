import { Section } from "./sections";



export class PageModel{

title:string=""
desription:string=""
bgImage:string=""
bgColor:string=""
sections:Section[];

constructor(title:string,description: string,bgColor: string ){
    this.title=title;
    this.desription=description;
    this.bgColor=bgColor;
}





}

