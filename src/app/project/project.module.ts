import { NgModule,ModuleWithProviders, Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import {FroalaEditorModule,FroalaViewModule } from 'angular-froala-wysiwyg';
import { ProjectComponent } from './project.component';
import { HomeComponent } from './pages/home/home.component';
import { PartsComponent } from './parts/parts.component';
import { PartsModule } from './parts/parts.module';


const ProjectRoutes: ModuleWithProviders= RouterModule.forChild([

{
    path:'project' , component:ProjectComponent
}
]);



@NgModule({
    imports: [
FroalaEditorModule,
FroalaViewModule,
ProjectRoutes,
PartsComponent,
PartsModule ],

 declarations: [ HomeComponent,
        ProjectComponent,
    ],
       
    providers: []
})
export class ProjectModule {

}