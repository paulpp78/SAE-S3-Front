import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { ArticleComponent } from './components/article/article.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MeteoComponent,
    ArticleComponent,
    CarousselComponent,
    FooterComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
