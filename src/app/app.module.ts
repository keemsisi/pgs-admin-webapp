import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { AdminDashBoardContainerComponent } from './admin-dash-board-container/admin-dash-board-container.component';
import {CustomHttpServiceServiceService} from './Services/custom-http-service-service.service';
import {AdminDashBoardComponent} from './admin-dash-board/admin-dash-board.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatInputModule
} from '@angular/material';



import {CacheService} from './Services/cache-service-service.service';
import {
  DataTableModule, FileUploadModule, DialogModule,
  ButtonModule, ConfirmDialogModule,  ToggleButtonModule,
  ConfirmationService , GrowlModule, CalendarModule, MessageService, InputTextModule

} from 'primeng/primeng';

import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';


import {LoginGaurdGuard} from './Gaurds/login-gaurd.guard';
import { AllApplicantsComponent } from './all-applicants/all-applicants.component';
import { AdminsComponent } from './admins/admins.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllAdminsComponent } from './all-admins/all-admins.component';
import { UserViewMoreDetailsComponent } from './user-view-more-details/user-view-more-details.component';
import { MetricsComponent } from './metrics/metrics.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const appRoute: Routes = [
  {path: '', redirectTo: '/adminlogin', pathMatch: 'full' },
  {path : 'adminlogin', component: AdminLoginComponent},
  {path : 'dashboard', component: AdminDashBoardContainerComponent, canActivate : [LoginGaurdGuard] ,
  children : [
    {path: 'admindashboard', component: AdminDashBoardComponent, canActivate: [LoginGaurdGuard] },
    {path: 'admins', component: AdminsComponent, canActivate: [LoginGaurdGuard] },
    {path: 'users', component: AllUsersComponent, canActivate: [LoginGaurdGuard] },
    {path: 'view-details/:username', component: UserViewMoreDetailsComponent, canActivate: [LoginGaurdGuard] },
    {path: 'metrics', component: MetricsComponent, canActivate: [LoginGaurdGuard] }
  ]},
  {path: '**', component: PagenotfoundComponent, canActivate: [LoginGaurdGuard] }
];


@NgModule({
  declarations: [

    AppComponent,
    AdminLoginComponent,
    AdminDashBoardContainerComponent,
    AdminDashBoardComponent,
    AllApplicantsComponent,
    AdminsComponent,
    AllUsersComponent,
    AllAdminsComponent,
    UserViewMoreDetailsComponent,
    MetricsComponent,
    PagenotfoundComponent,

  ],

  imports: [
    BrowserModule, HttpClientModule, ToggleButtonModule, FileUploadModule, BrowserAnimationsModule, FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoute), DataTableModule, GrowlModule,
     DialogModule, ButtonModule, ConfirmDialogModule, CalendarModule , 
     MessagesModule , ToastModule, InputTextModule, ReactiveFormsModule,MatInputModule
  ],

  providers: [ConfirmationService, CustomHttpServiceServiceService, CacheService, LoginGaurdGuard , MessageService],
  bootstrap: [AppComponent]


}) 
export class AppModule { }
