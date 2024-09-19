import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent implements OnInit{
  cadastroForm!: FormGroup;
  private router: Router = new Router;

  ngOnInit() {
    this.cadastroForm = new FormGroup({
      usuario: new FormControl(),
      inicio: new FormControl(),
      fim: new FormControl(),
  });
  }

  onClick() {
    this.router.navigate(['/consulta']);

}
}
