import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugsListComponent } from './components/drugs/drugs-list/drugs-list.component';
import { HomeListComponent } from './components/home/home-list/home-list.component';
import { AddDrugComponent } from './components/drugs/add-drug/add-drug.component';
import { EditDrugComponent } from './components/drugs/edit-drug/edit-drug.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { SignUpComponent } from './components/signup/sign-up/sign-up.component';
import { DisplayDrugComponent } from './components/drugs/display-drug/display-drug.component';
import { UserCartComponent } from './components/drugs/user-cart/user-cart.component';
import { RoleguardService } from './services/roleguard.service';
import { OrderListComponent } from './components/order-list/order-list.component';
import { AdminorderListComponent } from './components/adminorder-list/adminorder-list.component';
const routes: Routes = [
  {
    path: '',component: HomeListComponent
  },
  {
    path: 'drugs',component: DrugsListComponent,canActivate: [RoleguardService],data: {expectedRole: 'admin'}
  },
  {
    path: 'drugs/add',component: AddDrugComponent,canActivate: [RoleguardService],data: {expectedRole: 'admin'}
  },
  {
    path: 'drugs/edit/:DrugId',component: EditDrugComponent,canActivate: [RoleguardService],data: {expectedRole: 'admin'}
  },
  {
    path: 'home/users/login', component: UserLoginComponent
  },
  {
    path: 'signup', component: SignUpComponent

  },
  {
    path: 'displaydrug', component: DisplayDrugComponent,canActivate: [RoleguardService],data: {expectedRole: 'user'}
  },
  {
    path: "displaydrug/cart", component: UserCartComponent,canActivate: [RoleguardService],data: {expectedRole: 'user'}
  },
  {
    path: "displaydrug/cart/orders", component: OrderListComponent,canActivate: [RoleguardService],data: {expectedRole: 'user'}
  },
  {
    path: "drugs/orders", component: AdminorderListComponent,canActivate: [RoleguardService],data: {expectedRole: 'admin'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
