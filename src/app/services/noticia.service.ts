import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  private readonly baseURL = environment.endPoint;
  private httpClient = inject(HttpClient);

  ListarNoticias() {
    return this.httpClient.post<any>(`${this.baseURL}/ListarNoticias/`, null);
  }
}
