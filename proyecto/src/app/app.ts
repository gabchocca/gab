import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Hero } from './components/hero/hero';
import { Horarios } from './components/horarios/horarios';
import { Institucional } from './components/institucional/institucional';
import { Lenguajes } from './components/lenguajes/lenguajes';
import { Profesores } from './components/profesores/profesores';
import { Programas } from './components/programas/programas';
import { Testimonios } from './components/testimonios/testimonios';

@Component({
  imports: [RouterOutlet, Nav, Hero, Horarios, Institucional, Lenguajes, Profesores, Programas, Testimonios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('proyecto');
}
