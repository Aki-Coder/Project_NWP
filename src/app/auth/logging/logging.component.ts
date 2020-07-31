import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService } from './logging.service';

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

    this.isLoading = true;
    if(this.isLoginMode){

    }else{
      this.authService.singup(email, password).subscribe(resData=>{
        console.log(resData);
        this.isLoading = false;
      }, error =>{
        console.log(error);
        this.error = "An error ocured";
        this.isLoading = false;
      });
    }


    form.reset();
  }

}
