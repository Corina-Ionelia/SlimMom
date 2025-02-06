const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware CORS extins
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

app.options("*", cors()); // Tratează cererile OPTIONS
app.use(express.json());

// Conectare la MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectat la MongoDB"))
    .catch(err => console.error("Eroare MongoDB:", err));

// Rute
app.use("/api/auth", require("./routes/authRoutes"));

// Pornire server
app.listen(PORT, () => {
    console.log(`Server rulează pe portul ${PORT}`);
});