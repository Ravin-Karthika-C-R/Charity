import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AdminAddMemberComponent } from './admin-add-member/admin-add-member.component';
import { AdminAddStaffsComponent } from './admin-add-staffs/admin-add-staffs.component';
import { AdminViewStaffsComponent } from './admin-view-staffs/admin-view-staffs.component';
import { AdminViewMemberComponent } from './admin-view-member/admin-view-member.component';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { AdminViewDonationsComponent } from './admin-view-donations/admin-view-donations.component';
import { AdminEditMemberComponent } from './admin-edit-member/admin-edit-member.component';
import { AdminEditStaffComponent } from './admin-edit-staff/admin-edit-staff.component';
import { AdminAddFundComponent } from './admin-add-fund/admin-add-fund.component';
import { AdminViewFundComponent } from './admin-view-fund/admin-view-fund.component';
import { AdminEditFundComponent } from './admin-edit-fund/admin-edit-fund.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    LoginComponent,
    UserRegisterComponent,
    UserHomeComponent,
    AdminHomeComponent,
    UserHeaderComponent,
    AdminAddMemberComponent,
    AdminAddStaffsComponent,
    AdminViewStaffsComponent,
    AdminViewMemberComponent,
    AdminViewUsersComponent,
    AdminViewDonationsComponent,
    AdminEditMemberComponent,
    AdminEditStaffComponent,
    AdminAddFundComponent,
    AdminViewFundComponent,
    AdminEditFundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
