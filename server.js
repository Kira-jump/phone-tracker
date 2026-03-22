const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Fichiers statiques en premier
app.use(express.static(path.join(__dirname, 'public')));

// Recevoir une position
app.post('/api/update', (req, res) => {
  const { id, lat, lng, time } = req.body;
  positions[id] = { id, lat, lng, time };
  console.log(`📍 Position reçue : ${id} → ${lat}, ${lng}`);
  res.json({ success: true });
});

// Envoyer toutes les positions
app.get('/api/positions', (req, res) => {
  res.json(Object.values(positions));
});

// Page principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let positions = {};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
