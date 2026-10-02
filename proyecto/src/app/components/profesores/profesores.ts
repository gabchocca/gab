import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profesores',
  styleUrl: './profesores.css',
  templateUrl: './profesores.html',
})
export class Profesores {

  docentes = [

    {
      iniciales: 'AM',
      nombre: 'Ana Morales',
      idioma: 'Inglés',
      especialidad: 'Comunicación y preparación académica.'
    },

    {
      iniciales: 'JP',
      nombre: 'Juan Pérez',
      idioma: 'Francés',
      especialidad: 'Fonética y conversación.'
    },

    {
      iniciales: 'LS',
      nombre: 'Laura Sánchez',
      idioma: 'Alemán',
      especialidad: 'Gramática y expresión oral.'
    },

    {
      iniciales: 'DC',
      nombre: 'Diego Castro',
      idioma: 'Portugués',
      especialidad: 'Conversación y cultura.'
    }

  ];
}
