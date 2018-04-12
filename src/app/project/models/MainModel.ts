import { PageModel } from "./pagemodel";


export class Main{

 title:string="MainPage";
 description:string;
 pages:PageModel[];
 bgColor: string;
 theme:string;
 template:string="";
 constructor(template ?: string){
     this.template=template;
 }

 generatePages(...pages: any[]){
    for(let page in pages){
       this.pages.push(pages[page]);
    }

}
}
