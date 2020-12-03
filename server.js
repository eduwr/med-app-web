const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('server listening on port 3000')
})