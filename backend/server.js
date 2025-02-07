const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware CORS extins
app.use(
    cors({
        origin: "http://localhost:3000", // Frontend-ul tău
        credentials: true, // Permite cookie-uri/token
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Metode permise
        allowedHeaders: ["Content-Type", "Authorization"], // Headere permise
    })
);

// Tratează cererile OPTIONS (preflight)
app.options("*", cors());

// Middleware pentru parsare JSON
app.use(express.json());

// Conectare la MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ Conectat la MongoDB"))
    .catch((err) => console.error("❌ Eroare MongoDB:", err));

// Rute
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Pornire server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server rulează pe portul ${PORT}`);
});