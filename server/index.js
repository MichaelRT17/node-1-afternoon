const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const messages_controller = require('./controllers/messages_controller');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', messages_controller.create);
app.get('/api/messages', messages_controller.read);
app.put('/api/messages/:id', messages_controller.update);
app.delete('/api/messages/:id', messages_controller.delete);

app.listen(port, ()=>{
    console.log('Listening on port:' + port)
})