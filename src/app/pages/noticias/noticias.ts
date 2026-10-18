import { Component, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-noticias',
  imports: [Navbar],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  public readonly title = signal('Notícias');
}
