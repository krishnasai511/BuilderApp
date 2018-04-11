import { Section } from "./sections";



export class PageModel{

title:string=""
desription:string=""
bgImage:string=""
bgColor:string=""
sections:Section[];

constructor(title:string,description: string ){
    this.title=title;
    this.desription=description;
}

getsections(...sections:any[]){
    for (let section in sections){
       this.sections.push(sections[section]);
    }

}

}