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
  {path:"admin-edit-staff",component:AdminEditStaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
