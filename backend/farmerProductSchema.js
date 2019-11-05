var mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    ProductName:{
        type:String,
        required: true
    },
    StartingBid:{
        type: Number,
        required: true
    },
    Quantity:{
        type: Number,
        required: true
    },
    Unit:{
        type: String,
        required: true
    },
    Location:{
        type: String,
        required: true
    }
});

itemSchema.set('collection', 'farmerProduct');

const Item = module.exports = mongoose.model('farmerProduct', itemSchema);
