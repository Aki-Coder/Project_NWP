import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService, AuthResponseData } from './logging.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs : Observable<AuthResponseData>;

    this.isLoading = true;
    if(this.isLoginMode){
      authObs =  this.authService.login(email, password);
    }else{
      authObs = this.authService.singup(email, password);
    }

    authObs.subscribe(
      resData=>{
        console.log(resData);
        this.isLoading = false;
    }, errorMessage =>{
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
    }
    )
    form.reset();
  }

}
