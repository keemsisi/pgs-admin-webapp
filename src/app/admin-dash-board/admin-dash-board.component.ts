import { Component, OnInit } from '@angular/core';
import { CustomHttpServiceServiceService } from '../Services/custom-http-service-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/primeng';
import { Router, Route } from '@angular/router';
import { CacheService } from '../Services/cache-service-service.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  totalPublicationsFiles: number ;
  totalCommendationFiles: number ;
  totalAwardsFiles: number ;
  totalExtraCurriculaActivitiesFiles: number ;
  totalEdcationalCertFiles: number ;
  totalInternationalRecognitionsFiles: number ;
  totalNationalRecognitionsFiles: number ;
  totalSpecialAssignmentFiles: number ;
  totalNationalAndProfessionalQualificationsFiles: number ;
  totalPrizesFiles: number ;
  totalHonoursFiles: number ;

  totalUsers: number ;
  totalAdmins: number ;




  examName: string ;
  constructor(private httpRequest: CustomHttpServiceServiceService , 
    private messageService: MessageService, private router: Router , private cacheSeervice: CacheService) {
    if ( this.cacheSeervice.loggedIn  === false ) {
      this.router.navigate(['/']);
    }
    this.countAllFilesIndDb();
  }

  ngOnInit() {
  }

  countAllFilesIndDb() {
    // count national-recognitions-files
    this.httpRequest.countFiles('national-recognitions').subscribe(data => {
      this.totalNationalRecognitionsFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('international-recognitions').subscribe(data => {
      this.totalInternationalRecognitionsFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('prizes').subscribe(data => {
      this.totalPrizesFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('commendations').subscribe(data => {
      this.totalCommendationFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('awards').subscribe(data => {
      this.totalAwardsFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('national-and-professional-qaulifications').subscribe(data => {
      this.totalNationalAndProfessionalQualificationsFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('special-assignments').subscribe(data => {
      this.totalSpecialAssignmentFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('honours').subscribe(data => {
      this.totalHonoursFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('educational-certificates').subscribe(data => {
      this.totalEdcationalCertFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ 
          severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count educational-certificates Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('publications').subscribe(data => {
      this.totalPublicationsFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ 
          severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count publications Files'});
        console.log(error);
    });

    this.httpRequest.countFiles('extra-curricula-activities').subscribe(data => {
      this.totalExtraCurriculaActivitiesFiles = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ 
          severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count publications Files'});
        console.log(error);
    });

    this.httpRequest.countUsers().subscribe(data => {
      this.totalUsers = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({
          severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count publications Files'});
        console.log(error);
    });

    this.httpRequest.countAdmins().subscribe(data => {
      this.totalAdmins = data.count ;
    }, ( error: HttpErrorResponse) => {
        this.messageService.add({ 
          severity : 'error' , detail : 'error message from server' , summary : 'Unable to Count publications Files'});
        console.log(error);
    });


  }


}


