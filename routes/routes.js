const express = require('express')
const router = express.Router()

const { 

    tablaUsuario,
    tablaUsuarioSP
} = require('../controllers')

router.post('/getTablaUsuarioSP',tablaUsuarioSP)
router.get('/getTablaUsuario', tablaUsuario) 

module.exports = router