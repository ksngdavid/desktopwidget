const express = require('express');
const app = express();                 //assigning our express app a constant name "app"

app.get('/',(req,res)=>res.send('custom redirect eq'));

app.listen(3000);