import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { UserdataService } from './services/userdata.service';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './education/education.component';
import { HttpModule } from '@angular/http'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducationdataService } from './services/educationdata.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ComingsoonComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    UserdataService,
    EducationdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
