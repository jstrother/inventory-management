import express from 'express';
import {static} from 'express';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const Inventory = function() {

};

const inventory = new Inventory();

const app = express();
app.use('/inventory', static('public'));

app.get();

app.post();

app.put();

app.delete();

app.listen(process.env.PORT || 8080);