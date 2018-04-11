export class Items{
    type:string="";
    title:string="";
    imgUrl:string="";
    Values:any={
        minval:100,
        maxval:100
    }
    constructor(type?:string,title?:string){
        this.type=type;
        this.title=title;
    }
}