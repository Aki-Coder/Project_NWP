import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './logging.service';
import { Observable } from 'rxjs';
import { exhaustMap,take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private service: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) :Observable<HttpEvent<any>> {
    console.log('Request is on a way');
    return this.service.user.pipe(
      take(1),
      exhaustMap((user=>{
        if(!user){
          return next.handle(req);
        }
        const clone = req.clone({
          params: new HttpParams().set("auth",user.token),
        });
        return next.handle(clone);
      }))
    )
  }
}
