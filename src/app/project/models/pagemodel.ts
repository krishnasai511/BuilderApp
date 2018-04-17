import { Section } from "./sections";



export class PageModel{

title:string=""
description:string=""
bgImage:string=""
bgColor:string=""
sections:Section[];

constructor(title:string,description: string ){
    this.title=title;
    this.description=description;
}

// generatesections(...sections:any[]){
//     for (let section in sections){
//        this.sections.push(sections[section]);
//     }

// }
public static createPage(): PageModel {
    return new PageModel("Page1","this is description of page");
}




}