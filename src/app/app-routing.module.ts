import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TarefasComponent } from './componentes/tarefas/tarefas.component';
import { StatusComponent } from './componentes/status/status.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tarefas',
    component: TarefasComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'status',
    component: StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
