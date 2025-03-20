const express = require('express');
const app = express();
const path = require('path');
const crypto = require('crypto');

const urlMap = {}; // In-memory storage

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve frontend files

// Handle URL shortening
app.post('/shorten', (req, res) => {
    const originalUrl = req.body.url;
    const code = crypto.randomBytes(3).toString('hex');
    urlMap[code] = originalUrl;
    const shortUrl = `${req.protocol}://${req.get('host')}/${code}`;
    res.json({ shortUrl });
});

// Redirect short URL
app.get('/:code', (req, res) => {
    const code = req.params.code;
    const originalUrl = urlMap[code];
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

