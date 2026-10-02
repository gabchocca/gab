import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  standalone: true,
  templateUrl: './programs.html'
})
export class Programs {

  programas = [

    {
      tipo: 'PRESENCIAL',
      titulo: 'Programa Regular',
      descripcion: 'Clases en aula con acompañamiento directo.',
      items: [
        'Clases participativas',
        'Material de estudio',
        'Evaluaciones periódicas'
      ]
    },

    {
      tipo: 'VIRTUAL',
      titulo: 'Programa Online',
      descripcion: 'Aprende desde cualquier lugar.',
      items: [
        'Aulas virtuales',
        'Recursos digitales',
        'Horarios flexibles'
      ]
    },

    {
      tipo: 'HÍBRIDA',
      titulo: 'Programa Mixto',
      descripcion: 'Combina clases presenciales y virtuales.',
      items: [
        'Sesiones presenciales',
        'Clases online',
        'Seguimiento personalizado'
      ]
    }

  ];


}