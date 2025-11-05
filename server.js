const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use('/static', express.static(path.join(__dirname, 'public')));

// ===== RUTAS =====
app.get('/', (req, res) => {
  res.render('layout', { page: 'pages/index', activePage: 'bienestar' });
});

app.get('/salud', (req, res) => {
  res.render('layout', { page: 'pages/salud', activePage: 'salud' });
});

app.get('/permanencia', (req, res) => {
  res.render('layout', { page: 'pages/permanencia', activePage: 'permanencia' });
});

app.get('/deporte', (req, res) => {
  res.render('layout', { page: 'pages/deporte', activePage: 'deporte' });
});

app.get('/cultura', (req, res) => {
  res.render('layout', { page: 'pages/cultura', activePage: 'cultura' });
});

app.get('/inclusion', (req, res) => {
  res.render('layout', { page: 'pages/inclusion', activePage: 'inclusion' });
});

// Inicio externo (sin activo)
app.get('/inicio', (req, res) => {
  res.redirect('https://ul.edu.co/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
