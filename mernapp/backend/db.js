const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected");

        let fetched_data = mongoose.connection.db.collection("food_items");
        
        // Fetch food_items data
        let data = await fetched_data.find({}).toArray();

        let foodCategory = mongoose.connection.db.collection("foodCategory");

        // Fetch foodCategory data within the callback of fetching food_items data
        let catData = await foodCategory.find({}).toArray();

        global.food_items = data;
        global.foodCategory = catData;
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoDB;


