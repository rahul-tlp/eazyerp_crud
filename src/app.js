
let express = require('express');
let indexWebRouter = require('./router/index');
require('dotenv').config()
let app = express();
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api', indexWebRouter);


app.get('/', function (req, res) {
  res.send('Access Denied')
});

app.listen(PORT,(err) =>{
    if (err) {
      console.log(err);
    } else {
      console.log("PORT is listen");
    }
  })

module.exports = app;