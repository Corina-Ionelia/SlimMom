const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/slimmom', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectat la MongoDB');
    } catch (error) {
        console.error('Eroare la conectare:', error.message);
        process.exit(1); // Oprește aplicația în caz de eroare
    }
};

module.exports = connectDB;