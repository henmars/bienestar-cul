const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static
app.use('/static', express.static(path.join(__dirname, 'public')));

// rutas (puedes luego convertir a rutas dinámicas)
app.get('/', (req, res) => res.render('layout', { page: 'pages/index' }));
app.get('/salud', (req, res) => res.render('layout', { page: 'pages/salud' }));
app.get('/permanencia', (req, res) => res.render('layout', { page: 'pages/permanencia' }));
app.get('/deporte', (req, res) => res.render('layout', { page: 'pages/deporte' }));
app.get('/cultura', (req, res) => res.render('layout', { page: 'pages/cultura' }));
app.get('/inclusion', (req, res) => res.render('layout', { page: 'pages/inclusion' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
