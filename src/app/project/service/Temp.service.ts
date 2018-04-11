import {Section} from "../models/sections";
import {Main} from "../models/MainModel";
import {PageModel} from "../models/pagemodel";
import { Items } from "../models/ItemModel";


export class Temp{

    generateTemp(template :string): Main
    {
      let tempname=new Main("BuilderApp");
      let openPg=new PageModel("Home page","trying to print the template");
      let openSec=new Section("New Section","We will add more sections");
      let openIt=new Items("images");
      openIt.imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ol8CjPWLG1nCa62RXVCsE6Of2DhI_ZN1ISwOG_fRa3E3FtSa";


      return 

    }
}