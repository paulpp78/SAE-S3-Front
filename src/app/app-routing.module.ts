import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunauteComponent } from './communaute/communaute.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LaFeteComponent } from './la-fete/la-fete.component';
import { MusiqueComponent } from './musique/musique.component';
import { EventCommunauteComponent } from './event-communaute/event-communaute.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'communaute', component: CommunauteComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'la-fete', component: LaFeteComponent },
  { path: 'musique', component: MusiqueComponent },
  { path: 'event-communaute', component: EventCommunauteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
