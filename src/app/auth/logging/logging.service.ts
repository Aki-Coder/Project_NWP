import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn : 'root'
})

export class AuthService{

  constructor(private http : HttpClient){}

  singup(email : string, password: string){
    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbd7Z16yYzhWHmyWrz0oRzAKfq61LHgLc",
    {
      email:email,
      password : password,
      returnSecureToken: true
    }
    );
  }
}
