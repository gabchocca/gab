import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-horarios',
  styleUrl: './horarios.css',
  templateUrl: './horarios.html',
})
export class Horarios {
  horarios = [

    {
      idioma: 'Inglés',
      nivel: 'A1',
      modalidad: 'Presencial',
      horario: 'Lun - Mié | 6:00 p. m.',
      promocion: 'Matrícula gratis'
    },

    {
      idioma: 'Francés',
      nivel: 'A1',
      modalidad: 'Virtual',
      horario: 'Mar - Jue | 7:00 p. m.',
      promocion: '20% descuento'
    },

    {
      idioma: 'Alemán',
      nivel: 'A1',
      modalidad: 'Híbrida',
      horario: 'Sábados | 9:00 a. m.',
      promocion: 'Matrícula gratis'
    },

    {
      idioma: 'Portugués',
      nivel: 'A2',
      modalidad: 'Virtual',
      horario: 'Sábados | 4:00 p. m.',
      promocion: '15% descuento'
    }

  ];
}
