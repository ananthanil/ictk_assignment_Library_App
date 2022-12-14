import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUser(user:any){
    return this.http.post<any>("http://localhost:3006/login",user) 
  }

  constructor(private http:HttpClient) { }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  getToken()
{
  return localStorage.getItem('token')
}
}
