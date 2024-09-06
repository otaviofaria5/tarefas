import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit{
  displayedColumns = ['nome_usuario', 'matricula_usuario', 'data_inicio', 'editar', 'delete'];
  dataSource!: [];
  expandedElement! : | null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  cadastroForm!: FormGroup;

  ngOnInit() {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(),
      matricula: new FormControl(),
      inicio: new FormControl(),
  });
  }

  deleteUser(id : number) {
      }

  editarUser(id: number) {

  }


}

export interface Usuario {
  id: "string",
  nome_usuario: "string",
  matricula_usuario: "string",
  data_inicio: "string"
}
