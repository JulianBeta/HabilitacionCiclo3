const { response, request } = require('express')

const usuariosGet = (req = request , res = response) => {
    //const usuario = req.body
    res.json({
        msg: 'GET'
    })
} 

const usuariosPost = (req ,res) => {
    //const usuario = req.query
    res.json({
        msg: 'POST'
    })
} 

const usuariosPut = (req ,res) => {
    //const usuario = req.query
    res.json({
        msg: 'PUT'
    })
} 

const usuariosDelete = (req = request , res = response) => {
    //const usuario = req.query
    res.json({
        msg: 'DEL'
    })
} 

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut
}