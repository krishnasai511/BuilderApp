export class Items{
    id:string="";
    type:string="";
    title:string="";
    imgUrl:string="";
    visible:boolean=true;
    
    Values:any={
        minval:100,
        maxval:100
    }
    constructor(type?:string,title?:string){
        this.type=type;
        this.title=title;
    }
}