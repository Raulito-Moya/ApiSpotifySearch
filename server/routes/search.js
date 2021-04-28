const { Router } = require('express');
const router = Router();

const { search, searchinUser } = require('../controllers/search') 

router.get(
    '/search',
       search
        )

 router.get(
      '/searchloged',
       searchinUser
 )       

module.exports = router        