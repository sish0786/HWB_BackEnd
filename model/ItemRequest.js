const mongoose = require('mongoose');
const SCHEMA = mongoose.Schema;


const itemRequestSchema = new SCHEMA({
    name: {
        type: String,
        required : true,
    },
    mobileNo: {
        type: String,
        required: true,
        minLength: 10,
    },
    address: {
        type: String,
        required: true,
    },
    items: {
        type: String,
        required: true,
    }, 
});

module.exports = mongoose.model("ItemRequest",itemRequestSchema);
 