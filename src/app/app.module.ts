import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComingsoonComponent } from './components/comingsoon/comingsoon.component';
import { UserdataService } from './services/userdata.service';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './components/education/education.component';
import { HttpModule } from '@angular/http'
import { NgwWowModule } from 'ngx-wow';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducationdataService } from './services/educationdata.service';
import { SkillsComponent } from './components/skills/skills.component';
import { LandingComponent } from './components/landing/landing.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ComingsoonComponent,
    EducationComponent,
    SkillsComponent,
    LandingComponent,
    MySkillsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgwWowModule
  ],
  providers: [
    UserdataService,
    EducationdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
