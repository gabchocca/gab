import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-testimonios',
  styleUrl: './testimonios.css',
  templateUrl: './testimonios.html',
})
export class Testimonios {
  testimonios = [

    {
      nombre: 'María Rojas',
      programa: 'Inglés A2',
      texto:
        'Las clases son dinámicas y los docentes resuelven mis dudas.'
    },

    {
      nombre: 'Carlos Huamán',
      programa: 'Francés A1',
      texto:
        'La modalidad virtual me permite estudiar desde cualquier lugar.'
    },

    {
      nombre: 'Lucía Torres',
      programa: 'Alemán A1',
      texto:
        'Me gusta que practiquemos conversación desde las primeras clases.'
    }

  ];

}
