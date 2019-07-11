let providerModel = require('../models/provider');

exports.view = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    providerModel.find((err, items) => {
        if (err) {
            console.log("Error while retrieving the data => " + err);
        }
        else if (items.length > 0) {
            res
            .status(200)
            .send(items);
        }
        else {
            res.status(200);
            res.send(JSON.parse('{"response" : "No providers available."}'));
        }
    });
}