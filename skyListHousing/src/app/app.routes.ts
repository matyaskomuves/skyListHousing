import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HouseListComponent } from './house-list/house-list.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'house-list', component: HouseListComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent },
];
