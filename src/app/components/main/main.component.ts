import { Component, OnInit, ComponentFactoryResolver, Type, ViewChild,
  ViewContainerRef } from '@angular/core';

import { TextComponent } from '../text/text.component';
import { FormComponent } from '../form/form.component';
import { VideoComponent } from '../video/video.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
   styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  visible=true;
 components = [];

 formcomponentclass=FormComponent
 textcomponentclass=TextComponent
 videocomponentclass=VideoComponent

 constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  addComponent(componentClass: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const component = this.container.createComponent(componentFactory);
    this.components.push(component);
    this.visible=false;
  }

  removeComponent(componentClass: Type<any>) {
    const component = this.components.find((component) => component.instance instanceof componentClass);
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      this.container.remove(this.container.indexOf(component));
      this.components.splice(componentIndex, 1);
    }
  }
  openedit(){
    this.visible=true;
  
  }
}
