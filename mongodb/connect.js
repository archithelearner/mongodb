const mongoose = require ("mongoose");

function connect(){
   mongoose.connect(
    "mongodb+srv://archi:<PASSWORD>@cluster0-9gebl.mongodb.net/test?retryWrites=true",
    {useNewUrlParser: true});
   console.log("connected to DB");
}
module.exports = connect;