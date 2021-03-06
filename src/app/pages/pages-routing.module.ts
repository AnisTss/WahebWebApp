import { FictionComponent } from './fiction/fiction.component';
import { DocumentaryComponent } from './documentary/documentary.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortraitsComponent } from './portraits/portraits.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'portraits',
    component: PortraitsComponent
  },
  {
    path: 'documentary',
    component: DocumentaryComponent
  },
  {
    path: 'fiction',
    component: FictionComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class PagesRoutingModule { }
