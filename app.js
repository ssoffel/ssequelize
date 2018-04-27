const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const layout = require('./views/layout');
const {db} = require('./models/index');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.send(layout("Hello"));
})

   const PORT = 3000;

   const init = ()=> {
       console.log("this is db______", db.models);
       models.User.sync()
        .then(user => models.Page.sync())
        .then(page => console.log('synced'))
        .catch(console.error.bind(console))
       //await models.Page.sync()


     app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
     });

   }

init();


db.authenticate().then(() => {
  console.log('connected to the database');
})
