let router = require('express').Router();
let providerController = require('../controllers/providerController');

router.get('/',(req,res)=>{
    res.send(JSON.parse('{"response" : "Welcome to ISP Server Backend."}'));
});

router.get('/getProviders',providerController.view);

module.exports = router;