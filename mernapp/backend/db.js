const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://goFood:OreoUchiha@cluster0.zdp7p1f.mongodb.net/?retryWrites=true&w=majority'

const mongoDB =  async () => {
    await mongoose.connect(mongoURI)
    console.log("Database has been connected!");
};


module.exports = mongoDB;