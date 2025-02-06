const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Înregistrare utilizator
exports.registerUser = async(req, res) => {
    try {
        const { username, email, password, bloodType } = req.body;

        // Verifică dacă utilizatorul există deja
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email deja înregistrat' });
        }

        // Criptează parola
        const hashedPassword = await bcrypt.hash(password, 10);

        // Salvează utilizatorul
        const user = new User({
            username,
            email,
            password: hashedPassword,
            bloodType,
        });

        await user.save();
        res.status(201).json({ message: 'Utilizator înregistrat cu succes!' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Autentificare utilizator
exports.loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;

        // Verifică existența utilizatorului
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Date de autentificare invalide' });
        }

        // Verifică parola
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Date de autentificare invalide' });
        }

        // Generează JWT
        const token = jwt.sign({ userId: user._id },
            process.env.JWT_SECRET, { expiresIn: '1h' }
        );

        res.status(200).json({ token, userId: user._id });
        res.status(200)
            .header("Access-Control-Allow-Origin", "http://localhost:3000")
            .json({ token, userId: user._id });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};