import { ClientesInadimplentesComponent } from './clientes-inadimplentes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClientesInadimplentesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesInadimplentesRoutingModule { }
