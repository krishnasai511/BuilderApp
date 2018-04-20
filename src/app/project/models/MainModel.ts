import { PageModel } from "./pagemodel";


export class Main{

id:string='';
 title:string="MainPage";
 description:string;
 pages:PageModel[];
 bgColor: string;
 bgImg:string;
 theme:string;
 template:string="";
visible:boolean;
heading:string='';


 constructor(template ?: string){
     this.template=template;
 }

 generatePages(...pages: any[]){
    for(let page in pages){
       this.pages.push(pages[page]);
    }

}
}
