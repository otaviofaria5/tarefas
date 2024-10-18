import { Component, Input, OnInit , input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit{
  @Input() nome_usuario = ''
  @Input() matricula_usuario = ''
  @Input() data_inicio = ''
  displayedColumns = ['nome_usuario', 'matricula_usuario', 'data_inicio', 'editar', 'delete'];
  dataSource!: [];
  expandedElement! : Usuario | null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  cadastroForm!: FormGroup;
  mensagemErro = "";
  submetido = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome_usuario: ['', [Validators.required]],
      matricula_usuario: ['',[ Validators.required]],
      data_inicio: ['', [Validators.required]]
    })

    this.cadastroForm.get('nome_usuario')?.setValue(this.nome_usuario);
    this.cadastroForm.get('matricula_usuario')?.setValue(this.matricula_usuario);
    this.cadastroForm.get('data_inicio')?.setValue(this.data_inicio);


    this.getUsuario();
  }
 public getJsonValue: any;
 public postJsonValue: any;

  public getUsuario(){
    this.http.get('https://reconecti-se-backend2024-d0d2d726f82c.herokuapp.com/api/usuario', httpOptions).subscribe((data : any) => {
    this.dataSource = data;
    console.log(data);
    return this.http.get;
    }
  )


  }
  Cadastrar(Usuario: Usuario): Observable<Usuario> {
    this.http.post<Usuario>(`https://reconecti-se-backend2024-d0d2d726f82c.herokuapp.com/api/usuario`, Usuario, httpOptions);
    if(this.cadastroForm.valid) {
      const nome_usuario = this.cadastroForm.controls['nome_usuario'].value;
      const inicio = this.cadastroForm.controls['matricula_usuario'].value;
      const data_inicio = this.cadastroForm.controls['data_inicio'].value;
      ({
        next: (value: any) => {
          console.log('Autenticado com sucesso', value)
        },
      })
    }
    return this.http.post<Usuario>('https://reconecti-se-backend2024-d0d2d726f82c.herokuapp.com/api/usuario', Usuario, httpOptions);
  }
  deleteUser(id : number) {
      this.http.delete('https://reconecti-se-backend2024-d0d2d726f82c.herokuapp.com/api/usuario',httpOptions).subscribe((data: any) => {
        if(data.isDeleted) {
          alert('Usuario deletado com sucesso.');
          this.getUsuario();
        }
      })

  }


  editarUser(id: number) {}

}



export interface Usuario {
  id: "string",
  nome_usuario: "string",
  matricula_usuario: "string",
  data_inicio: "string"
}


