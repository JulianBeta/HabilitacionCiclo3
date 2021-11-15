const Usuarios = require("../models/mUsuarios");

exports.getUsuarios = (req, res) => {
  Usuarios.find().then((usuarioResult) => {
    res.status(200).json(usuarioResult);
  });
};

exports.addUsuario = (req, res) => {
  const usuarioadd = new Usuarios({
    Documento: req.body.Documento,
    NombreApellido: req.body.NombreApellido,
    Telefono: req.body.Telefono,
    Correo: req.body.Correo,
    Rol: req.body.Rol
  });

  usuarioadd.save().then((createdUser) => {
    console.log(createdUser);
    res.status(201).json("Usuario Creado");
  });
};

exports.getUsuatioId = (req, res) => {
  Usuarios.findById(req.params.id).then((usuarioResult) => {
    if (usuarioResult) {
      res.status(200).json(usuarioResult);
    } else {
      res.status(404).json("Usuario No Encontrado");
    }
  });
};

exports.deleteUsuario = (req, res) => {
  Usuarios.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Usuarios.findByIdAndDelete(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Usuario Eliminado");
        }
      );
    } else {
      res.status(404).json("Usuario No Encontrado");
    }
  });
};

exports.updateUsuarioById = (req, res) => {
  Usuarios.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Usuarios.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Usuario Actualizado");
        }
      );
    } else {
      res.status(404).json("Usuario No Actualizado");
    }
  });
};
