'use strict' //hanya menjalankan data di file ini saja

const express = require('express')
const userAuth = require('../token/authorization')
const router =  new express.Router();

router.post("/registrasi", userAuth.registrasi)
router.post("/login", userAuth.login)


module.exports = router