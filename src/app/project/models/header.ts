export interface Navlist{
    navlist: string;
 }

export interface Navigation{

    bgColor:string;
    Logo:string;

}

export class Header{

hbrandName: string;
hpgTitle:string;
hpgDescription:string;
hnavigations:Navigation[];
hnavlists: Navlist[];
hbgColor:string;
hbgImg:string;



 constructor(hnavheader ?: string,hnavlist ?: Navlist[],hpgTitle ?: string, hpgDescription ?: string,
     hnavigation ?: Navigation[],hbgColor ?:string, hbgImg ?: string ){

     this.hbrandName = hnavheader;
     this.hnavlists = hnavlist;
     this.hbgColor=hbgColor;
     this.hbgImg=hbgImg;
     this.hnavigations=hnavigation;
     this.hpgTitle=hpgTitle;
     this.hpgDescription=hpgDescription;
 }
 
  public static createsample(): Header{
     return new Header('Page Header',[{navlist:'About'},{navlist:'Contact Us'}],"Welcone to our page",
     "This is the page for template Editing",[{bgColor:'red', Logo:''}])
 }
 
 }
 