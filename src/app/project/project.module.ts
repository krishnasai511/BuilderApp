import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FroalaEditorModule,FroalaViewModule } from 'angular-froala-wysiwyg';
import { ProjectComponent } from './project.component';



// const ProjectRoutes:Routes= [

// {
//     path:'project' , component:ProjectComponent
// }
// ];



@NgModule({
 imports: [
FroalaEditorModule,
FroalaViewModule,
RouterModule.forRoot(ProjectRoutes), ],

 declarations: [
        ProjectComponent,
    ],
   
       
    providers: []
})
export class ProjectModule {

}