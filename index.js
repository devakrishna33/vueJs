const express = require('express');
const app = express();

//Setting up server
const port = process.env.port || 9002;
app.listen(port , () => {
    console.log("Listening on port ", port);
});

//Serving static files
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
