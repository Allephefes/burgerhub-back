let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ProductSchema = new Schema({

    title: String,

    description: String,

    created: Date



});



module.exports = mongoose.model('product', ProductSchema);