const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware pentru cereri JSON și CORS
app.use(express.json());
app.use(cors());

// endpoint login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // verificare a utilizatorului
    if (username && password) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// endpoint inregistrare
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    // inregistrare a utilizatorului
    if (username && email && password) {
        res.json({ message: 'Registration successful' });
    } else {
        res.status(400).json({ message: 'Invalid data' });
    }
});

app.post('/api/diary', (req, res) => {
    const { userId, entry } = req.body;

    // adaugare a unei intrari in jurnal
    res.json({ message: 'Diary entry saved' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});