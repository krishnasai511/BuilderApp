import {Section} from "../models/sections";
import {Main} from "../models/MainModel";
import {PageModel} from "../models/pagemodel";
import { Items } from "../models/ItemModel";
import { Injectable } from "@angular/core";

@Injectable()
export class Temp{

    generateTemp(template:string){
      let newTemp=new Main("BuilderApp");
      let newPg=new PageModel("Home page","Trying to print the page of template");
      let newSec=new Section("New Section","We will add more sections");
      let newIt=new Items("New Item");
     let header=new Items('heade',"rFirst header");
     let footer=new Items('footer',"First Footer");
      // newSec.generateItems(newIt,header,footer);
      // newPg.generatesections(newSec);
      // newTemp.generatePages(newPg);
  
  
  // return newTemp;
    }
}