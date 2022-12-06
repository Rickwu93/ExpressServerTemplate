const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11



/*
Line 1 and 2 - requires Express and allows us to use it inside our server.js file.

Line 3 – It will set the Express server on which port it will run on.

Line 6 – will display a message on the console that the server is working as expected.

Line 9 to 11 – It will set a GET route that we will, later on, fetch from our client-side React App.



*/