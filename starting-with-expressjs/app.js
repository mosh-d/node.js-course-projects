const path = require('path');

const express = require('express');
// const bodyPareser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended: false}));

// Parse incoming JSON
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'error-page.html'));
});

app.listen(3000);