import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly http = inject(HttpClient);
  constructor() {}

  private readonly baseUrl = environment['endpoint'];

  LoginUsuario(objeto: any) {
    return this.http.post<any>(`${this.baseUrl}/CriarTokenIdentity/`, objeto);
  }
}
