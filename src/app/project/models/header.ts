export interface Navlist{
    navlist: string;
 }
 export class Header{
 navheader: string;
 navlists: Navlist[];
 constructor(navheader: string,navlist: Navlist[]){
     this.navheader = navheader;
     this.navlists = navlist;``
 }
 
  public static createsample(): Header{
     return new Header('Page Header',[{navlist:'About'},{navlist:'Contact Us'}])
 }
 
 }
 