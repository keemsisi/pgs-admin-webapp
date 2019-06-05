import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomHttpServiceServiceService } from '../Services/custom-http-service-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService, InputText } from 'primeng/primeng';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  allAdmins: [] ;
  roles: Array<Object> ;
  newAdminForm: FormGroup ;
  showAdminDeleteDiag  = false ;
  adminToBeDeleted: string ;
  adminExist = false ;
  usernameAvailable = false ;
  usernameIsAvailable = false  ;

  @ViewChild('username') username: HTMLImageElement ;
  @ViewChild('password') password: HTMLImageElement ;
  @ViewChild('role') role: HTMLImageElement ;

  constructor(private httpService : CustomHttpServiceServiceService,
     private messageService : MessageService,
     private fb: FormBuilder
     ) {

      this.newAdminForm = this.fb.group({
        username : new FormControl(null , [Validators.required , Validators.minLength(4)]),
        password : new FormControl(null , [Validators.required]),
        role : new FormControl(null , [Validators.required])
      });

      this.getAllAdmins(); // get all the admins
      this.newAdminForm.get('username').statusChanges.subscribe( status  => {
        this.newAdminForm.get('username').value ? this.checkIfAdminExists(this.newAdminForm.get('username').value) : '';
      } );
     }

  ngOnInit() {
}




  /**
   * This method deletes the selected admin from the system
   */
  deleteAdmin(): void {
    this.httpService.deleteAdmin(this.adminToBeDeleted).subscribe(data => {
      this.messageService.add({
        severity : 'success' , detail : 'New Admin Created' , summary : data.message});
        this.showAdminDeleteDiag = false ;
        this.getAllAdmins();
    }, (error: HttpErrorResponse) => {
      this.messageService.add({
        severity : 'error' , detail : 'Error Message' , summary : 'Failed to Add admin'});
    });
  }




  /**
   * Send the new admin credentials to the server to be able to log in to the system 
   */
  createNewAdmin(): void {
    console.log(this.newAdminForm.value);
    this.httpService.createNewAdmin(
      this.newAdminForm.value).subscribe(data => {
      this.newAdminForm.setValue({'username' : null , 'password' : null , 'role' : null });
      this.messageService.add({
        severity : 'success' , detail : 'Admin Delete Action' , summary : 'Admin was deleted Successfully!'});
        this.getAllAdmins();

    }, (error: HttpErrorResponse) => {
      this.messageService.add({
        severity : 'error' , detail : 'Error Message' , summary : 'Failed to delete admin '});
    });
  }



  /**
   * Get all the registered admin from the server and populate the table 
   */
  getAllAdmins() {
    this.httpService.getAllAdmin().subscribe( data => {

      this.allAdmins = data;
      console.log(this.allAdmins);

    } , (error : HttpErrorResponse) => {
      this.messageService.add({
        severity : 'error' , detail : 'error message from server' , summary : 'Failed to get all admins'});
    });
  }

  checkIfAdminExists(username){

    this.adminExist = true ;
    setTimeout(()  => {
      this.httpService.checkAdminExists(username).subscribe( data => {
        data.exists ? this.adminExist  = true : this.adminExist  = false;
      } , (error: HttpErrorResponse) => {
        this.messageService.add({
          severity : 'error' , detail : 'error message from server' , summary : 'Failed to get all admins'});
      });
    }, 1500);

  }

  /**
   * 
   * @param username THe admin username to be deleted from the system
   */
  showDeleteModal( username: string ): void {
    this.adminToBeDeleted = username ;
    this.showAdminDeleteDiag = true ;
  }

  /**
   * 
   * @param username THe admin username to be deleted from the system
   */
  closeModal(): void {
    this.adminToBeDeleted = null ;
    this.showAdminDeleteDiag = false ;
  }

}
