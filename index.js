let express = require('express')
let apiRoutes = require("./api-routes")
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use('/api', apiRoutes)
mongoose.connect('mongodb://localhost/rr', {userNewUrlParser: true})
var db = mongoose.connection;
var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hey there express'));
app.listen(port, function() {
    console.log(`Running on port ${port}`);
})