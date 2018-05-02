

export interface BodySections {
    image: string;
    title: string;
    description: string

}

export interface Navigation {

    bgColor: string;
    Logo: string;

}
export interface Navlist {
    navlist: string;
}


export class Body {

    hbrandname: string;
    hpgTitle: string;
    hpgDescription: string;
    hnavigations: Navigation[];
    hnavlists: Navlist[];
    hbgColor: string;
    hbgImg: string;
    templatetype: string;
    title: string;
    description: string;
    bgColor: string;
    bgImg: string;
    bodysections: BodySections[];
    bodyAboutTitle: string;
    bodyAboutContent: string;
    footerTitle: string;
    footerData: string;

    constructor(templatetype?: string, title?: string, description?: string, bgColor?: string, bgImg?: string,
        bodysection?: BodySections[], bodyAboutTitle?: string, bodyAboutContent?: string, footerTitle?: string,
        footerData?: string,
        hbrandname?: string, hnavlist?: Navlist[], hpgTitle?: string, hpgDescription?: string,
        hnavigation?: Navigation[], hbgColor?: string, hbgImg?: string) {
        this.templatetype = templatetype
        this.title = title;
        this.description = description;
        this.bodysections = bodysection;
        this.bgColor = bgColor;
        this.bgImg = bgImg;
        this.bodyAboutTitle = bodyAboutTitle;
        this.bodyAboutContent = bodyAboutContent;
        this.footerData = footerData;
        this.footerTitle = footerTitle

        this.hbrandname = hbrandname;
        this.hnavlists = hnavlist;
        this.hbgColor = hbgColor;
        this.hbgImg = hbgImg;
        this.hnavigations = hnavigation;
        this.hpgTitle = hpgTitle;
        this.hpgDescription = hpgDescription;
    }

    public static createsample(): Body {
        return new Body('', 'Page Title', 'Page Description short way', "red", "", [{ image: '', title: 'page 1', description: 'Write Something' }],
            "About us", "Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization."
            , "Contact Me", "",'Page Header',[{navlist:'About'},{navlist:'Contact Us'}],"Welcone to our page",
            "This is the page for template Editing",[{bgColor:'red', Logo:''}])
    }

}

