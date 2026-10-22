import { Component, inject, OnInit, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { NoticiaService } from '../../services/noticia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  imports: [Navbar],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias implements OnInit {
  private noticiaService = inject(NoticiaService);
  private readonly router = inject(Router);
  public readonly title = signal('Notícias');

  constructor() {}

  // noticias!: any;
  public readonly noticias = signal<any[]>([]);

  ngOnInit(): void {
    this.ListarNoticias();
  }

  ListarNoticias() {
    debugger;
    this.noticiaService.ListarNoticias().subscribe({
      next: (noticias) => {
        console.log(noticias);
        this.noticias.set(noticias);
      },
      error: (error) => {
        console.error(error);
        this.router.navigate(['/login']);
      },
    });
  }
}
