import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AutenticaService } from '../services/autentica.service';

export const interceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const autenticaService = inject(AutenticaService);
  const token = autenticaService.ObterToken();

  let clonedReq = req;

  if (req.body instanceof FormData) {
    // Para FormData, NÃO definimos o Content-Type (o browser faz isso sozinho).
    // Apenas adicionamos o Token de autorização, se existir.
    if (token) {
      clonedReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
  } else {
    // Para requisições normais (JSON)
    clonedReq = req.clone({
      setHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  }

  return next(clonedReq);
};

// import {

//   HttpEvent,
//   HttpHandler,
//   HttpHeaders,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { AutenticaService } from '../services/autentica.service';
// import { inject } from '@angular/core';

// export class Interceptor implements HttpInterceptor {
//   private autenticaService = inject(AutenticaService);

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     debugger;

//     let headers;

//     if (req.body instanceof FormData) {
//       headers: new HttpHeaders({
//         'content-type': 'false',
//         processData: 'false',
//         Authorization: `Bearer ${this.autenticaService.ObterToken()}`,
//       });
//     } else {
//       headers = new HttpHeaders()
//         .append('Accept', 'application/json')
//         .append('Content-Type', 'application/json')
//         .append('Authorization', `Bearer ${this.autenticaService.ObterToken()}`);
//     }
//     let request = req.clone({ headers });
//     return next.handle(request).pipe(
//       map((event) => {
//         // You can add custom logic here if needed
//         return event;
//       }),
//     );
//   }
// }
