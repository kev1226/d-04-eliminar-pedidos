const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  cliente: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
