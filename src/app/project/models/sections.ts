export class Section{

    title: string = 'New Section';
    description: string = '';
    boxes:string="";

    constructor(title:string,description:string,boxes: string){
        this.title=title;
        this.description=description;
        this.boxes=boxes;
    }

}

