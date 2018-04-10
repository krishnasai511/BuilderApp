import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './project/parts/header/header.component';
import { FooterComponent } from './project/parts/footer/footer.component';
<<<<<<< HEAD
import { TextareaComponent } from './project/parts/textarea/textarea.component';
=======
import { TextareComponent } from './project/parts/textarea/textarea.component';
>>>>>>> 8cd643b537ede4f199754f0757f42d5dcac80410
import { ButtonsComponent } from './project/parts/buttons/buttons.component';
import { HomeComponent } from './project/pages/home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectComponent } from './project/project.component';

const approutes : ModuleWithProviders = RouterModule.forRoot([
  {
    path:"" ,component: WelcomeComponent
  }
]);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TextareaComponent,
    ButtonsComponent,
    HomeComponent,
    WelcomeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,approutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
