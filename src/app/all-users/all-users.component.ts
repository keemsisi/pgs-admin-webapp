import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CacheService } from '../Services/cache-service-service.service';
import { CustomHttpServiceServiceService } from '../Services/custom-http-service-service.service';
import { MessageService } from 'primeng/primeng';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  // : Observable<Array<Object>> = new Observable<Array<Object>>() ;
  allUser: Observable<Array<Object>> = new Observable<Array<Object>>() ;
  allUsers =  [];

  startIndex = 0 ;
  amount = 500 ;

  constructor(private http: CustomHttpServiceServiceService ,
     private cache: CacheService,
     private messageService: MessageService , private router : Router
     ) {
  }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {
    const counter = setInterval( () => {
      this.http.getAllUsers(this.startIndex, 100000000).subscribe( data => {
        // console.log(data);
        // if (data.length > 0) {
          this.allUsers = data ;
          // this.allUser.pipe().
          // console.log(data);
          // data.forEach( element => {
            // this.allUsers.push(
            //   element
            // );

            // of(this.allUsers).subscribe(f => {
            //   this.allUsers = f;
            // });

          //  console.log(this.allUsers);
          //    this.startIndex = this.amount ;
          //    this.amount  += 500;
          //  });
          clearInterval(counter);

        // } else {
          // clearInterval(counter);

          // }
      }, (error: HttpErrorResponse) => {
              this.messageService.add({
                severity : 'error' , detail : 'Error Message' , summary : 'Failed fetch users'});
        });
    }, 1000);
}

  /**
   * 
   * @param username The username of the registered user
   */
  deleteUser(username) {
    this.http.deleteUser(username).subscribe( data => {
      this.messageService.add({
        severity : 'success' , detail : 'User delete was successful!' , summary : 'User '  + username  + 'deleted'});
        this.getAllUsers();
    }, (error: HttpErrorResponse) => {
      this.messageService.add({
        severity : 'error' , detail : 'Error Message' , summary : 'Failed to delete user ' + username
      });
    });
  }
  viewMore(username) {
    this.router.navigate(['dashboard/view-details', username]);
  }
}
