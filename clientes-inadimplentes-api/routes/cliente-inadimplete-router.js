'use-strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-inadimplete-controller');

let _controller = new controller();

router.get(
    '/',
    _controller.getClientesInadimplentes
);


module.exports = router;