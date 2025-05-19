const express = require('express');
const router = express.Router();
const { eliminarPedido } = require('../controllers/pedido.controller');

router.delete('/:id', eliminarPedido);

module.exports = router;

