const express = require('express.io');
const app = express();

app.http().io();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.io.route('send', (req) => {
    app.io.room(req.data.room).broadcast('message', {
        message: req.data.message,
        author: req.data.author
    })
})


app.io.route('ready', (req) => {
    req.io.join(req.data)
    app.io.room(req.data).broadcast('announce', {
        message: 'New client in the ' + req.data + ' room.'
    })
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})