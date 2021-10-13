const mongoose = require('mongoose');


const connectDB = async () => {
    try
    {
        await mongoose.connect("mongodb+srv://sumedh:sumedh%40123@cluster0.xg8kx.mongodb.net/project0?retryWrites=true&w=majority"); 
    }
    catch(err)
    {
        res.status(505).json({msg : "Database Connection error : " + err});
    }
    console.log("Database Connected...");

}

module.exports = connectDB;

