const { Router } = require('express');
const router = Router();

//esto ruta es solo un ejemplo 
const { authTokenUser }= require('../controllers/auth')

router.get(
     '/usertoken',
      authTokenUser
)


module.exports = router;