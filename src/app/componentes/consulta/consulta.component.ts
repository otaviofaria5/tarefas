import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {
  displayedColumns = ['descricao', 'usuario', 'data_inicio', 'data_termino', 'editar', 'delete'];
  dataSource!: Usuario[];
  expandedElement! : Usuario | null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}
    ngOnInit(){
      this.getTarefas();

    }

    public getTarefas(){
      this.http.get('https://reconecti-se-backend2024-d0d2d726f82c.herokuapp.com/api/tarefas').subscribe((data : any) => {
      this.dataSource = data;
      console.log(data);
      return this.http.get
      }
    )
  }
  deleteUser(id : number) {
  }
  editarUser(id: number) {

  }

  onClick() {
    this.router.navigate(['/tarefas']);

}
}
export interface Usuario {
  id: "string",
  descricao: "string",
  usuario: "string",
  data_inicio: "string",
  data_termino: "string"
}
