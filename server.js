import express from 'express';
import {static} from 'express';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const Inventory = function() {

};

const inventory = new Inventory();

const app = express();
app.use('/inventory', static('public'));

app.get('/inventory', function(request, response) {

});

app.post('/inventory', function(request, response) {

});

app.put('/inventory', function(request, response) {

});

app.delete('/inventory', function(request, response) {

});

app.listen(process.env.PORT || 8080);