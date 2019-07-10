let router = require('express').Router();
let providerController = require('../controllers/providerController');

router.get('/',(req,res)=>{
    res.send("Welcome to express js");
});

router.get('/getProviders',providerController.view);

module.exports = router;