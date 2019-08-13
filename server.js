var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');


const users = require(`./routes/user`)
const graqhql = require(`./routes/graqhql`)

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// app.use(express.urlencoded({
//     extended: true
// }))
// app.use(express.json())

app.use(users)
app.use(graqhql)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});