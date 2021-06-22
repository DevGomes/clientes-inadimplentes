import { Observable } from 'rxjs';
import { ClienteInadimplentePaginable } from './../models/ClienteInadimplentePaginable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientesInadimplentesService {
    
    private mainDomain: string = 'http://localhost:3001/api';

    constructor(private httpClient: HttpClient) { }

    buscarClientesInadimplentes(configPagination: ClienteInadimplentePaginable): Observable<any> {
        let uriRequestDefault = `${this.mainDomain}/cliente-inadimplentes?currentPage=${configPagination.currentPage}&perPageItems=${configPagination.perPageItems}`;

        ['busca', 'sortField', 'typeSort'].forEach(field => {
            if (configPagination?.[field]) {
                uriRequestDefault = uriRequestDefault.concat(`&${field}=${configPagination?.[field]}`);
            }
        });

        return this.httpClient.get(uriRequestDefault);
    }
}
