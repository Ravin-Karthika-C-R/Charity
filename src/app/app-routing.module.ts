import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminAddMemberComponent } from './admin-add-member/admin-add-member.component';
import { AdminAddStaffsComponent } from './admin-add-staffs/admin-add-staffs.component';
import { AdminViewMemberComponent } from './admin-view-member/admin-view-member.component';
import { AdminViewStaffsComponent } from './admin-view-staffs/admin-view-staffs.component';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { AdminViewDonationsComponent } from './admin-view-donations/admin-view-donations.component';
import { AdminEditMemberComponent } from './admin-edit-member/admin-edit-member.component';
import { AdminEditStaffComponent } from './admin-edit-staff/admin-edit-staff.component';
import { AdminAddFundComponent } from './admin-add-fund/admin-add-fund.component';
import { AdminViewFundComponent } from './admin-view-fund/admin-view-fund.component';
import { AdminEditFundComponent } from './admin-edit-fund/admin-edit-fund.component';
import { UserDonatePageComponent } from './user-donate-page/user-donate-page.component';
import { UserSeperateDonationPageComponent } from './user-seperate-donation-page/user-seperate-donation-page.component';
import { UserViewFundComponent } from './user-view-fund/user-view-fund.component';
import { UserFormDonationComponent } from './user-form-donation/user-form-donation.component';
import { UserViewItemDonationComponent } from './user-view-item-donation/user-view-item-donation.component';



const routes: Routes = [
  {path:"",component:LandingComponent},
  // {path:"login",component:LoginComponent},
  {path:"user-register",component:UserRegisterComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"admin-home",component:AdminHomeComponent},
  {path:"user-login",component:LoginComponent},
  {path:"user-home",component:UserHomeComponent},
  {path:"admin-add-member",component:AdminAddMemberComponent},
  {path:"admin-add-staffs",component:AdminAddStaffsComponent},
  {path:"admin-view-member",component:AdminViewMemberComponent},
  {path:"admin-view-staffs",component:AdminViewStaffsComponent},
  {path:"admin-view-user",component:AdminViewUsersComponent},
  {path:"admin-view-donations",component:AdminViewDonationsComponent},
  {path:"admin-edit-member/:id",component:AdminEditMemberComponent},
  {path:"admin-edit-staff/:id",component:AdminEditStaffComponent},
  {path:"admin-add-fund",component:AdminAddFundComponent},
  {path:"admin-view-fund",component:AdminViewFundComponent},
  {path:"admin-edit-fund/:id",component:AdminEditFundComponent},

  //users
  {path:"user-donate-page/:id",component:UserDonatePageComponent},
  {path:"user-header-view-fund",component:UserSeperateDonationPageComponent},
  {path:"user-receipt",component:UserViewFundComponent},
  {path:"user-donation-form",component:UserFormDonationComponent},
  {path:"user-view-item-donation",component:UserViewItemDonationComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
