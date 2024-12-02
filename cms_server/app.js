const express = require('express');
const app = express();
app.get('/new/', (req, res) => {  
    res.send('Hello Sarvesh');
});
const PORT = 9999;
app.listen(PORT, () => {
    console.log(`Server is running`);
});