let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let api = require('./api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', api);

const OPT = { useNewUrlParser: true };
let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Running on port " + port);
})