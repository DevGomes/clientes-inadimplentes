import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesInadimplentesRoutingModule } from './clientes-inadimplentes-routing.module';
import { ClientesInadimplentesComponent } from './clientes-inadimplentes.component';


@NgModule({
    declarations: [
        ClientesInadimplentesComponent
    ],
    imports: [
        CommonModule,
        ClientesInadimplentesRoutingModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class ClientesInadimplentesModule { }
