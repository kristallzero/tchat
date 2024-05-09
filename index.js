// ExpressJS libraries
import express from 'express';
import exphbs from 'express-handlebars';
import session from 'express-session';
import flash from 'connect-flash';

// MongoDB libraries
// import mongoose from 'mongoose';
// import mongoStore from 'connect-mongodb-session';
// const MongoStore = mongoStore(session);

// Routes
import chatRoutes from './routes/chat.js';


const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

// const store = new MongoStore({
//   collection: 'sessions',
//   uri: process.env.MONGODB
// })

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   store
// }));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(flash());

app.use('/', chatRoutes);

const PORT = process.env.PORT || 3000;

async function main() {
  // await mongoose.connect(process.env.MONGODB);
  app.listen(PORT, () => console.log(`Server has started on localhost:${PORT}`));
}

main();