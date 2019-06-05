import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CacheService {
  username: string ;
  password: string ;
  loggedIn = false ;
  serverURL = 'http://localhost:8081';

  constructor() { }
}
