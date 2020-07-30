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

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode){

    }else{
      this.authService.singup(email, password).subscribe(resData=>{
        console.log(resData);
      }, error =>{
        console.log(error);
      });
    }


    form.reset();
  }

}
