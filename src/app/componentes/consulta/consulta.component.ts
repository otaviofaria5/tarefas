import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {
  displayedColumns = ['descricao', 'id_status_atual', 'usuario', 'data_inicio', 'data_termino', 'editar', 'delete'];
  dataSource!: Usuario[];
  expandedElement! : Usuario | null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];


  deleteUser(id : number) {
  }
  editarUser(id: number) {

  }
  constructor(
    private router: Router,
    ) {}
  onClick() {
    this.router.navigate(['/tarefas']);

}
}
export interface Usuario {
  id: "string",
  descricao: "string",
  id_status_atual: "string",
  usuario: "string",
  data_inicio: "string",
  data_termino: "string"
}
