import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent
  ]
})
export class MainModule { }
