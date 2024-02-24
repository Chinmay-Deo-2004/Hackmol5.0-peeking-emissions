const mongoose=require('mongoose');


// create an schema
const userSchema = new mongoose.Schema({
            domain: String,
            footprint: Number,
            green: Boolean
        });
const userTable = mongoose.model('database',userSchema);

module.exports = userTable
        

