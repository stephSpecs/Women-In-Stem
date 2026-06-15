const express = require('express');
const path = require('path');
const women = require('./data/tools');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public'), { index: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/women/:id', (req, res) => {
    const woman = women.find(w => w.id === req.params.id);
        if (!woman) {
            return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
        }

        res.sendFile(path.join(__dirname, 'views', 'women', `${woman.id}.html`));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});