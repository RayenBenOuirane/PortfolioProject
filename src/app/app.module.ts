import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { routes } from './app.routes';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { ProjectModalComponent } from './project-modal/project-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    PortfolioComponent,
    ResumeComponent,
    ProfileImageComponent,
    SubscribeComponent,
    ProjectModalComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProjectCardComponent,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
