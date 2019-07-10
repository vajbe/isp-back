const mongoose = require('mongoose');

const providerSChema = new mongoose.Schema(  {
    isp_name : String,
    lowest_price : String,
    rating : String,
    max_speed : String,
    description : String,
    contact_n : String,
    email : String,
    img : String,
    url : String
});

module.exports = mongoose.model("Provider",providerSChema,"ISPList");