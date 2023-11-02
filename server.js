const express = require('express');
const app = express();
const path = require('path');        // Need this to get to the 'openTab' path
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'openTab'))); // VERY IMPORTANT: Tell app where is the folder to execute 'widgets-UAT.js'. If not, if you open browser, you can't locate the js file
app.get('/',(req,res)=>res.send('custom redirect eq'));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));   // Calling our app to listen to a certain port