import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { SellerDashboardComponent } from './components/seller-dashboard/seller-dashboard';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'seller-dashboard', component: SellerDashboardComponent }
];