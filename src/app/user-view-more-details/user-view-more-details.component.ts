import { Component, OnInit } from '@angular/core';
import { CustomHttpServiceServiceService } from '../Services/custom-http-service-service.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/primeng';
@Component({
  selector: 'app-user-view-more-details',
  templateUrl: './user-view-more-details.component.html',
  styleUrls: ['./user-view-more-details.component.css']
})
export class UserViewMoreDetailsComponent implements OnInit {

  userInfo: Array<Object> = [] ;
  username: string ;
  personalInformation: Array<Object> = [] ;
  files: Array<Object> = [] ;
  // collectionMappings = {
  //   'prizes':, 'honours' , 'international-recognitions', 'national-recognitions',
  //   'educational-certificates', 'national-and-professional-qaulifications',
  //   'special-assignments', 'publications','commendations','extra-curricula-activities','awards'
  // };

  constructor(
    private httpRequest: CustomHttpServiceServiceService, 
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
    ) {
     }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.username = params['username']; // assigns the username ;
      // console.log ('THIS IS THE USER' , this.username);
      this.getUserInformation(params['username']); // get the user information 
      this.getFiles(this.username);
    });
  }

  /**
   *
   */
  getUserInformation(username): void {
    this.httpRequest.getUserInformation(username).subscribe(data => {
      this.userInfo = data; // assigns the username ;
      this.personalInformation = [data.personalInformation];

     console.log(this.personalInformation);
    } , (error: HttpErrorResponse) => {
      this.messageService.add({
        severity : 'error' , detail : 'Error Message' , summary : 'Failed to load user infomation'});
    });
  }

  getFiles(username) {
    this.httpRequest.getFilesUploaded(username).subscribe(data => {
      this.files = data ;
      console.log(this.files);
    } , (error: HttpErrorResponse) => {
      this.messageService.add({
        severity : 'error' , detail : 'Error Message' , summary : 'Failed to load user files'});
    });
  }

  // downloadFile(id , collectionName , filename) {
  //   this.httpRequest.downloadFile(id , collectionName).subscribe(data => {
  //   } , (error: HttpErrorResponse) => {
  //     this.messageService.add({
  //       severity : 'error' , detail : 'Error Message' , summary : 'Failed to download file ' + filename});
  //   });
  // }

  /**
   * 
   * @param id The id of the file to download from the server 
   * @param collectionName This the directory wher rhte file can founde 
   * @param filename 
   */
  downloadFile(id , collectionName , filename) {
    this.httpRequest.downloadFile(id , collectionName);
  }


  // /**
  //  * 
  //  * @param id
  //  * @param collectionName
  //  */
  // deleteFile(id , collectionName , filename) {
  //   this.httpRequest.deleteFile(id , collectionName).subscribe(data => {
  //     this.files = data ;
  //     console.log(this.files);
  //   } , (error: HttpErrorResponse) => {
  //     this.messageService.add({
  //       severity : 'error' , detail : 'Error Message' , summary : 'Failed delete file ' + filename});
  //   });

  // }
}
