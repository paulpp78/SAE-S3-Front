import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EvenementComponent } from './evenement/evenement.component';
import { CommunauteComponent } from './communaute/communaute.component';
import { MusiqueComponent } from './musique/musique.component';
import { LaFeteComponent } from './la-fete/la-fete.component';
import { EventCommunauteComponent } from './event-communaute/event-communaute.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    EvenementComponent,
    CommunauteComponent,
    MusiqueComponent,
    LaFeteComponent,
    EventCommunauteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
