import { TypeSortEnum } from "./TypeSortEnum";

export class ClienteInadimplentePaginable {
    busca: string;
    sortField: string;
    currentPage: number;
    perPageItems: number;
    typeSort: TypeSortEnum;

    constructor() {
        this.sortField = 'nomeCliente';
        this.currentPage = 1;
        this.perPageItems = 10;
        this.typeSort = TypeSortEnum.ASCENDING;
    }
}