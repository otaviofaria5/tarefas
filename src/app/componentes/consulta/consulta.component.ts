import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {
  displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'editar', 'delete'];
  data: string[] = ['one', 'two', 'three', 'four', 'five'];
}
