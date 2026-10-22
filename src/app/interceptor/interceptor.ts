import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AutenticaService } from '../services/autentica.service';
import { inject } from '@angular/core';

export class Interceptor implements HttpInterceptor {
  private autenticaService = inject(AutenticaService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;

    let headers;

    if (req.body instanceof FormData) {
      headers: new HttpHeaders({
        'content-type': 'false',
        processData: 'false',
        Authorization: `Bearer ${this.autenticaService.ObterToken()}`,
      });
    } else {
      headers: new HttpHeaders()
        .append('Accept', 'application/json')
        .append('Content-Type', 'application/json')
        .append('Authorization', `Bearer ${this.autenticaService.ObterToken()}`);
    }
    let request = req.clone({ headers });
    return next.handle(request).pipe(
      map((event) => {
        // You can add custom logic here if needed
        return event;
      }),
    );
  }
}
