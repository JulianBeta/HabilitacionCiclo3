const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const venta = mongoose.Schema({
  Fecha_Venta: { type: String, required: true },
  Producto: { type: String, unique: true },
  Referencia: { type: Number, required: true },
  Precio: { type: Number, required: true },
  Descripcion: { type: String },
  Vendedor: { type: String, required: true },
  Categoria: { type: String, required: true },
});

venta.plugin(uniqueValidator);

module.exports = mongoose.model("Venta", venta);
