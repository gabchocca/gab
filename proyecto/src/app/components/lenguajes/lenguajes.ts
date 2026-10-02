import { Component } from '@angular/core';

@Component({
  selector: 'app-lenguajes',
  standalone: true,
  templateUrl: './lenguajes.html'
})
export class Lenguajes {

  idiomas = [

    {
      nombre: 'Inglés',
      icono: '🇬🇧',
      niveles: 'A1 - C1',
      descripcion: 'Aprende comunicación, gramática y vocabulario.'
    },

    {
      nombre: 'Francés',
      icono: '🇫🇷',
      niveles: 'A1 - B2',
      descripcion: 'Desarrolla comprensión y expresión oral y escrita.'
    },

    {
      nombre: 'Alemán',
      icono: '🇩🇪',
      niveles: 'A1 - B2',
      descripcion: 'Aprende estructuras y vocabulario.'
    },

    {
      nombre: 'Portugués',
      icono: '🇧🇷',
      niveles: 'A1 - B2',
      descripcion: 'Desarrolla habilidades para comunicarte.'
    },

    {
      nombre: 'Italiano',
      icono: '🇮🇹',
      niveles: 'A1 - B2',
      descripcion: 'Aprende mediante conversación y cultura.'
    },

    {
      nombre: 'Español',
      icono: '🇪🇸',
      niveles: 'Extranjeros',
      descripcion: 'Programa dirigido a estudiantes extranjeros.'
    }

  ];

}
