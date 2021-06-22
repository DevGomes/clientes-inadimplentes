'use-strict'

const fs = require('fs');
const repository = require('../repositories/cliente-inadimplete-repository');

const _repositoryClientesInadimplentes = new repository();

class ClienteInadimplenteController {

    constructor() {
        ClienteInadimplenteController.prototype.iniciarCargaInicialClientesInadimplentes();
    }

    async iniciarCargaInicialClientesInadimplentes() {
        const result = _repositoryClientesInadimplentes.getAll();

        if ((await result).length === 0) {
            await _repositoryClientesInadimplentes.insert(_repositoryClientesInadimplentes.getCargaInicial());
        }
    }

    async getClientesInadimplentes(req, res) {
        const { busca, sortField, currentPage, perPageItems, typeSort } = req.query;

        const page = parseInt(currentPage);
        const limit = parseInt(perPageItems);
        const skipIndex = (page - 1) * limit;
        const typeSortConvert = parseInt(typeSort);
        
        const result = await _repositoryClientesInadimplentes.getAllPagination({
            limit,
            skipIndex,
            busca,
            sortField,
            typeSortConvert
        });
        
        res.status(200).send({ result: result[0] });
    }
}

module.exports = ClienteInadimplenteController;
