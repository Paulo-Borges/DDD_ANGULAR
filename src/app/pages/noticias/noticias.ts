import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-noticias',
  imports: [Navbar],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias implements OnInit {
  public readonly title = signal('Notícias');

  constructor() {}

  listaNoticias!: Array<number>;

  ngOnInit(): void {
    var lista = new Array<number>();
    for (let i = 0; i < 12; i++) {
      lista.push(i);
    }
    this.listaNoticias = lista;
  }
}
