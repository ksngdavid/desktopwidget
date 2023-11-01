const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>res.send('custom redirect eq'));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));   // Calling our app to listen to a certain port