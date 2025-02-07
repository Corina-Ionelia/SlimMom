const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Încarcă variabilele de mediu din .env

const app = express();

// Middleware pentru a permite CORS
app.use(cors());
app.use(express.json()); // Suport pentru JSON

// Servește fișierele statice din directorul public
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("API-ul rulează!");
});

// Adaugă rutele API-ului tău aici
app.post("/api/user/dailyRate", (req, res) => {
    const { weight, height, age } = req.body;

    if (!weight || !height || !age) {
        return res.status(400).json({ message: "Toate câmpurile sunt obligatorii" });
    }

    const dailyCalories = 10 * weight + 6.25 * height - 5 * age + 5;

    res.json({ dailyCalories });
});

// Setează portul pentru Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));