const express = require('express');
const app = express();

app.get('/',(req,res)=>res.send('custom redirect eq'));

app.listen(3000);