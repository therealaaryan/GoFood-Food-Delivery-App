const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://goFood:OreoUchiha@cluster0.zdp7p1f.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected");
        let fetched_data = mongoose.connection.db.collection("food_items");
        let data = await fetched_data.find({}).toArray()
        console.log();
    } catch (error) {
        console.log(error);
    }

}

module.exports = mongoDB;

