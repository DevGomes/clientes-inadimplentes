'use strict'
require('../models/cliente-inadimplete-model');
const fs = require('fs');
const mongoose = require('mongoose');

class ClienteInadimpleteRepository {

    constructor() {
        const _this = ClienteInadimpleteRepository.prototype;
        this._model = mongoose.model('ClientesInadimplentes');
        _this.clientesCargaInicial = _this.inicializarCargaInicial();
    }

    async getAll() {
        return await this._model.find({});
    }

    async getAllPagination({ limit, skipIndex, busca = '', filedSort = 'nomeCliente', typeSortConvert = 1 }) {
        return await this._model.aggregate([
            { $match: { nomeCliente: { '$regex': busca, '$options': 'i' }, ativo: true } },
            { 
                $project: {
                    _id: 1,
                    'nomeCliente': 1,
                    'desde': 1,
                    valor: 1
                }
            },
            { $sort: { [filedSort]: typeSortConvert } },
            {
                $facet: {
                    items: [
                        { $skip: skipIndex },
                        { $limit: limit },
                    ],
                    pageInfo: [
                        { $group: { _id: null, totalCount: { $sum: 1 } } },
                    ],
                },
            },
            
        ]);
    }

    async insert(data) {
        return await this._model.insertMany(data);
    }

    getCargaInicial() {
        return ClienteInadimpleteRepository.prototype.clientesCargaInicial;
    }

    inicializarCargaInicial() {
        try {
            const clientesJsonString = fs.readFileSync('./db/clientes-inadimplentes.json', 'utf8');
            return JSON.parse(clientesJsonString);
        } catch (err) {
            console.error(err);
            return;
        }
    }
}

module.exports = ClienteInadimpleteRepository;