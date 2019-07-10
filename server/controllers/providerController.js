let providerModel = require('../models/provider');

exports.view = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    providerModel.find((err, items) => {
        if (err) {
            console.log("Error while retrieving the data => " + err);
        }
        else if (items.length > 0) {
            res.send(items);
        }
        else {
            res.send(JSON.parse('{"response" : "No providers available."}'));
        }
    });
}