import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './project/sections/header/header.component';
import { FooterComponent } from './project/sections/footer/footer.component';
import { TextareComponent } from './project/sections/textare/textare.component';
import { ButtonsComponent } from './project/sections/buttons/buttons.component';
import { HomeComponent } from './project/pages/home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TextareComponent,
    ButtonsComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
