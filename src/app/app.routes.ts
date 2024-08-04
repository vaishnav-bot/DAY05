import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'contactus',component:ContactusComponent}
];
