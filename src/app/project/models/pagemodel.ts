import { Section } from "./sections";



export class PageModel{

description:string=""
bgImage:string=""
bgImageVisible:boolean=true;
bgColor:string=""
visible:boolean=true;
sections:Section[];

constructor(description: string ){
    
    this.description=description;
}

generatesections(...sections:any[]){
    for (let section in sections){
       this.sections.push(sections[section]);
    }

}
// public static createPage(): PageModel {
//     return new PageModel("Page1","this is description of page");
// }




}