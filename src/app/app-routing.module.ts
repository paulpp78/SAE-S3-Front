import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunauteComponent } from './communaute/communaute.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'communaute', component: CommunauteComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
