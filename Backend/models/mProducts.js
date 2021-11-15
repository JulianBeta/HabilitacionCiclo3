const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const producto = mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  id: { type: String, required: true },
  categoria: { type: String, required: true },
  disponible: { type: Boolean, required: true },
});

producto.plugin(uniqueValidator);

module.exports = mongoose.model("Producto", producto);
