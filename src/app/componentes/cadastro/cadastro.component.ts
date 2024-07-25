import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CadastroComponent implements OnInit {
  displayedColumns = ['firstName', 'lastName', 'email', 'username', 'delete'];
  dataSource!: Usuario[];
  expandedElement! : Usuario | null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  constructor(private _service : CadastroComponent) {}

  ngOnInit(){
    // this.dataSource = this.ELEMENT_DATA;
    this.getAll()
  }

  getAll(){
    this._service.getAll().subscribe((data : any) => {
      this.dataSource = data.users;
      console.log(data.users[0])
    })
  }

  deleteUser(id : number) {
    this._service.deleteUser(id).subscribe((data: any) => {
      if(data.isDeleted) {
        alert('Usuario deletado com sucesso.');
        this.getAll();
      }
    })
  }

}

export class TableExpandableRowsExample {

  displayedColumns = ['firstName', 'lastName', 'email', 'username'];
}

export interface Usuario {
  id?: number;
  firstName: string;
  username: string;
  lastName: string ;
  email: string;
  Cadastro: string;
}

