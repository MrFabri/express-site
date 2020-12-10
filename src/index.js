const express = require('express');
const app = express();
const path = require('path');

app.set('port', 1337);  
app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes Dir
app.use(require('./routes/routes.js'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));


// Server Listening 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});