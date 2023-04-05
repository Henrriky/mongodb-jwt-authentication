const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController')

router.get('/', authController, (req, res) => {
    
    if (req.user.admin) {
        res.send("Esse dado só deve ser visto pelo Admin")
    } else {
        res.status(401).send("Not Admin: Access Denied")
    }
})

router.get('/free', authController, (req, res) => {
    res.send("Esse dado só deve ser visto por quem está logado")
})



module.exports = router