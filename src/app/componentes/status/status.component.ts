import { Component ,OnInit} from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent implements OnInit{
  displayedColumns = ['descricao', 'identificador', 'editar', 'delete'];
  dataSource!: Status[];
  expandedElement! : Status| null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient) {}
  ngOnInit(){
    this.getStatus();

  }

  public getStatus(){
    this.http.get('https://reconecti-se-backend2024-d0d2d726f82c.herokuapp.com/api/status').subscribe((data : any) => {
    this.dataSource = data;
    console.log(data);
    return this.http.get;
    }
  )
  }
  deleteUser(id : number) {
  }

  editarUser(id: number) {

 }
}

export interface Status{
  descricao: "string"
  id: "string",
  identificador: "string",
}



