import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit{
  displayedColumns = ['nome_usuario', 'matricula_usuario', 'data_inicio', 'editar', 'delete'];
  dataSource!: [];
  expandedElement! : Usuario | null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  cadastroForm!: FormGroup;

  ngOnInit() {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(),
     matricula: new FormControl(),
     inicio: new FormControl(),
  });
    this.getUsuario();
  }
 public getJsonValue: any;
 public postJsonValue: any;
 constructor(private http: HttpClient) {}

  public getUsuario(){
    this.http.get('https://reconecti-se-backend2024-d0d2d726f82c.herokuapp.com/api/usuario').subscribe((data : any) => {
    this.dataSource = data;
    console.log(data);
    this.getJsonValue= data;
    }
  )
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
