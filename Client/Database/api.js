const express = require('express');
const mongoose = require('mongoose');
const LoginRoute = require('./LoginSchema_Route/LoginRoute');

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());


mongoose.connect('mongodb://localhost:27017/Login_credentials')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Could not connect to MongoDB', err));

app.post('/getlogin', LoginRoute.getAllLogins);
app.post('/postlogin', LoginRoute.postLogin);

app.listen(3200, () => console.log('🚀 Server running on port 3200'));