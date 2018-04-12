import { Items } from "./ItemModel";

export class Section{

    title: string = 'New Section';
    description: string = '';
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

