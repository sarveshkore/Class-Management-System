const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

require('./router')(app);

app.listen(9999, () => {
    console.log('Server is running on http://localhost:9999');
});
