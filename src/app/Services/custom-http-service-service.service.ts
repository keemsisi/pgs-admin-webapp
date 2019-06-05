import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { MessageService } from 'primeng/primeng';


@Injectable()
export class CustomHttpServiceServiceService {

  staticURL = 'http://localhost:8081';
//  private staticURL = 'http://' + window.location.hostname+':8080';


  constructor(private http: HttpClient , private messageService: MessageService) {
  }


  /**
   *
   * @param path
   * @param data
   * @returns
   */
  countFiles(collectionName: string): Observable<any> {
    return this.http.get(`${this.staticURL}` + '/upload/count/' + collectionName, {responseType: 'json'});
  }


  getAllAdmin(): Observable<any> {
    return this.http.get(`${this.staticURL}` + '/admin/all', {responseType: 'json'});
  }

  checkAdminExists(username: string): Observable<any> {
    return this.http.post(`${this.staticURL}` + '/admin/exists', {'username': username}, {responseType: 'json'});
  }


  getAllUsers(start, end): Observable<any> {
    return this.http.get(`${this.staticURL}` + '/users/' + start + '/' + end, {responseType: 'json'});
  }



  countUsers(): Observable<any> {
    return this.http.get(`${this.staticURL}` + '/users/count', {responseType: 'json'});
  }



  countAdmins(): Observable<any> {
    return this.http.get(`${this.staticURL}` + '/admin/count', {responseType: 'json'});
  }

  /**
   * 
   * @param username 
   * @param password 
   */
  validateAdminLoginCredential(username: string , password: string): Observable<any> {
    console.log(username , password );
    return this.http.post(`${this.staticURL}` + '/admin/grant',
    {'username' : username , 'password' : password}, {responseType: 'json'});
  }


  /**
   *
   * @param username
   * @param password
   */
  createNewAdmin(adminValues: Object): Observable<any> {
    return this.http.post(`${this.staticURL}` + '/admin/new',
    adminValues, {responseType: 'json'});
  }


  /**
   * 
   * @param username
   */
  deleteAdmin(username: string): Observable<any> {
    return this.http.delete(`${this.staticURL}` + '/admin/' + username, {responseType: 'json'});
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`${this.staticURL}` + '/applicants/byusername/' + username, {responseType: 'json'});
  }

  /**
   * 
   * @param username The usename of the user
   */
  getUserInformation(username): Observable<any> {
    return this.http.get(`${this.staticURL}` + '/applicants/byusername/'  + username, {responseType: 'json'});
  }


  /**
   * 
   * @param username The usename of the user
   */
  getFilesUploaded(username): Observable<any> {
    return this.http.get(`${this.staticURL}` + '/upload/filemapping/'  + username, {responseType: 'json'});
  }


  /**
   *
   * @param byId
   * @param collectionName
   */
  downloadFile(byId, collectionName): void {
    const request = window.open(`${this.staticURL}` + '/upload/' + collectionName + '/byid/' + byId, '_self');
    request.onerror = () => {
      this.messageService.add({
        severity : 'error' , detail : 'Error Message' , summary : 'File failed to download'});
    };

    request.onload  = () => {
      this.messageService.add({
          severity : 'success' , detail : 'Success Message' , summary : 'File downloaded successfully'});
  };
    // return this.http.get(, {responseType: 'arraybuffer'});
  }



  // /**
  //  *
  //  * @param id
  //  * @param collectionName
  //  */
  // deleteFileById(id , collectionName): Observable<any> {
  //   return this.http.delete(`${this.staticURL}` + '/upload/_keys_/' + collectionName + '/byId/' + id, {responseType: 'json'});
  // }
}
