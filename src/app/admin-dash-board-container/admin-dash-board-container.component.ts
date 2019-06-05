import { Component, OnInit } from '@angular/core';
import {CacheService} from '../Services/cache-service-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dash-board-container',
  templateUrl: './admin-dash-board-container.component.html',
  styleUrls: ['./admin-dash-board-container.component.css']
})
export class AdminDashBoardContainerComponent implements OnInit {

  admin_username : string ;
  constructor(private  cacheService : CacheService, private router: Router) { }


  ngOnInit() {
    this.admin_username = this.cacheService.username ;
  }


  logout(){
    window.sessionStorage.setItem('adminlogin' , '');
    window.sessionStorage.setItem('adminusername' , '');
    window.sessionStorage.setItem('adminpassword' , '');
    this.cacheService.loggedIn = false ;
    this.router.navigate(['/']);
  }

}
