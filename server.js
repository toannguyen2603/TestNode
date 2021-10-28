const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json('Hello world!')
})


app.listen(PORT, () => {
    console.log('Connect successful http://localhost:' + PORT)
})
