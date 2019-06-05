import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Message, MessageService} from 'primeng/primeng';
import {CacheService} from '../Services/cache-service-service.service';
import {CustomHttpServiceServiceService} from '../Services/custom-http-service-service.service';
import {LoginParametersModel} from '../Models/login-parameters-model';
import {DashBoardModelComponent} from '../Models/dash-board-model-component';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: any;

  errorResponse: string;
  adminLoginParameters: LoginParametersModel = new LoginParametersModel();
  postURL = '/formconverter/admin/login';
  adminDashBoardModel: DashBoardModelComponent;
  succMsgs: Message[] = [];
  serverError = false ;
  error  = '';

  @Input() usernamme: string;
  @Input() username: string;

  constructor(private httpService: CustomHttpServiceServiceService,
              private fb: FormBuilder,
              private router: Router,
              private cacheService: CacheService,
              private messageService: MessageService

  ) {

  }

  ngOnInit() {



    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }) ;



  }


  public login(loginFormValue: {}): void {

    this.error = '' ;

    this.adminLoginParameters.uname = loginFormValue['username'];
    this.adminLoginParameters.password = loginFormValue['password'];


    this.httpService.validateAdminLoginCredential(
      this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
      data => {
        if (data.valid) {
          // this.cacheService.dashBoardData.uname = data.uname ;
          this.cacheService.loggedIn = true;
          console.log(this.cacheService.loggedIn)
          // grant user login
          this.cacheService.loggedIn = true ;
          this.cacheService.password = this.loginForm.get('password') ;
          this.cacheService.username = this.loginForm.get('username') ;

          // save the admin username and password for session
          window.sessionStorage.setItem('adminlogin' , 'true');
          window.sessionStorage.setItem('adminusername' , this.loginForm.get('username'));
          window.sessionStorage.setItem('adminpassword' , this.loginForm.get('password'));

          this.router.navigate(['/dashboard/admindashboard']);
        } else {
          this.messageService.add({ severity : 'error' , detail : 'error message from server' , summary : 'Invalid loggin Credentials'});
        }
        // window.sessionStorage.setItem('dashBoardData',JSON.stringify( this.cacheService.dashBoardData));

      }, (err: HttpErrorResponse) => {
        this.serverError = true ;

        if (err.status === 403  ){
          this.error = JSON.parse(err.error).errorMessage;
          this.messageService.add({
             severity : 'error' , detail : 'error message from server' , summary : 'Error Occured... please try again'});
          // console.log(err);
        } else{
          this.error = 'Network Connection Error...';
          // console.log(err);
        }
      }
    );
  } // end class
}







