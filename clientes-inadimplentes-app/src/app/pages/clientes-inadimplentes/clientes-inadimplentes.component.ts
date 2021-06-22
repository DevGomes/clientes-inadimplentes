import { ClientesInadimplentesService } from './services/clientes-inadimplentes.service';
import { Component, OnInit } from '@angular/core';
import { ClienteInadimplentePaginable } from './models/ClienteInadimplentePaginable';
import { Cliente } from './models/Cliente';
import { TypeSortEnum } from './models/TypeSortEnum';

interface IThead {
	label: string;
	sortField: string;
	typeSort: TypeSortEnum;
}

@Component({
	selector: 'app-clientes-inadimplentes',
	templateUrl: './clientes-inadimplentes.component.html',
	styleUrls: ['./clientes-inadimplentes.component.scss']
})
export class ClientesInadimplentesComponent implements OnInit {

	theadConfigs: Array<IThead>;
	configPaginable: ClienteInadimplentePaginable;
	listaClientesInadimplentes: Array<Cliente>;
	totalItems: number;

	constructor(private clienteService: ClientesInadimplentesService) { }

	ngOnInit(): void {
		this.carregarConfiguracoesPaginacao();
		this.carregarClientesInadimplentes();
	}

	private carregarConfiguracoesPaginacao(): void {
		this.configPaginable = new ClienteInadimplentePaginable();
		this.theadConfigs = [
			{
				label: 'Nome do cliente',
				sortField: 'nomeCliente',
				typeSort: TypeSortEnum.ASCENDING
			},
			{
				label: 'Valor',
				sortField: 'valor',
				typeSort: TypeSortEnum.ASCENDING
			},
			{
				label: 'Desde',
				sortField: 'desde',
				typeSort: TypeSortEnum.ASCENDING
			}
		];
	}

	private carregarClientesInadimplentes(): void {
		this.clienteService
			.buscarClientesInadimplentes(this.configPaginable)
			.subscribe(response => {
				this.listaClientesInadimplentes = response.result.items;
				this.totalItems = response.result.pageInfo[0]?.totalCount || 0;
			});
	}

	sortField(theadConf: IThead): void {
		this.configPaginable.sortField = theadConf.sortField;
		theadConf.typeSort = theadConf.typeSort === TypeSortEnum.DESCENDING ?  TypeSortEnum.ASCENDING : TypeSortEnum.DESCENDING;
		this.configPaginable.typeSort = theadConf.typeSort
		this.carregarClientesInadimplentes();
	}

	getPage(page: number): void {
		this.configPaginable.currentPage = page;
		this.carregarClientesInadimplentes()
    }

	buscarCliente(): void {
		this.configPaginable.currentPage = 1;
		this.carregarClientesInadimplentes();
	}

}
