'use strict'
const variables = require('../bin/configuration/variables');

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const { CLIENTE_INADIMPLENTES } = variables.ModelsNames;

const clientesInadimplentesModel = new schema({
    nomeCliente: { trim: true, index: true, required: true, type: String },
    valor: { trim: true, index: true, required: true, type: Number},
    desde: { type: Date },
    ativo: { type: Boolean, default: true },
    dataCriacao: { type: Date, default: Date.now },
    dataAtualizacao: { type: Date, default: Date.now },
    deletado: { type: Boolean, default: false },
}, { versionKey: false });

clientesInadimplentesModel.pre('save', next => {
    let agora = new Date();
    if (this.dataPedido) {
        this.dataPedido = agora;
    }
    next();
});

module.exports = mongoose.model(CLIENTE_INADIMPLENTES, clientesInadimplentesModel);
