import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './project/parts/header/header.component';
import { FooterComponent } from './project/parts/footer/footer.component';
import { TextareComponent } from './project/parts/textarea/textarea.component';
import { ButtonsComponent } from './project/parts/buttons/buttons.component';
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
