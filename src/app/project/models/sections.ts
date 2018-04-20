import { Items } from "./ItemModel";

export class Section{

   _id: string = '';
	title: string = 'Section';
    description: string = '';
    icon:string = '';
    showIcon:boolean = true;
    visible:boolean=true;
    width:number;
    type:string;
    items:Items[]

    constructor(title:string,description:string){
        this.title=title;
        this.description=description;
    }

    generateItems(...items:any[]){
        for(let item in items){
            this.items.push(items[item]);
        }
    }

}

