import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../../services/servico/api.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent implements OnInit{
  displayedColumns = ['descricao', 'identificador', 'editar', 'delete'];
  dataSource!: Usuario[];
  expandedElement! : Usuario | null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];


  constructor(private _service : ApiService) {}
  ngOnInit(){
    this.getStatus()
  }

  getStatus(){
    this._service.getStatus().subscribe((data : any) => {
      this.dataSource = data.status;
      console.log(data.status[0])
    })
  }


  deleteUser(id : number) {
  }

  editarUser(id: number) {

 }
}
export interface Usuario {
  id: "string",
  identificador: "string",
  descricao: "string"
}


