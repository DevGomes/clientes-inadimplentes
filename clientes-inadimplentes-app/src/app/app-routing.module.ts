import { ClientesInadimplentesModule } from './pages/clientes-inadimplentes/clientes-inadimplentes.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'clientes-inadimplentes', pathMatch: 'full' },
	{ path: 'clientes-inadimplentes', loadChildren: () => ClientesInadimplentesModule },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
