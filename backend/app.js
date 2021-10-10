const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors, celebrate, Joi } = require('celebrate');
const cors = require('cors');
const usersRouter = require('./routes/user');
const cardsRouter = require('./routes/card');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const { createUser, login } = require('./controllers/user');
const Error404 = require('./errors/ErrorNotFound');

const { PORT = 3001 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(
  cors({
    origin: [
      //'https://domainname.lichernyshova.nomoredomains.club',
      //'http://domainname.lichernyshova.nomoredomains.club',
      'https://localhost:3000',
      'http://localhost:3000',
      //'https://62.84.119.7:3000',
      //'http://62.84.119.7:3000',
    ],
    credentials: true,
  }),
);
app.use(helmet());

app.use(express.json());

app.use(cookieParser());

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), login);
app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/^((http|https):\/\/)(www\.)?([\w\W\d]{1,})(\.)([a-zA-Z]{1,10})([\w\W\d]{1,})?$/),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }),
}), createUser);

app.use('/', auth, usersRouter);
app.use('/', auth, cardsRouter);

app.all('*', (req, res, next) => next(new Error404('Ресурс не найден')));

app.use(errors());

app.use(errorHandler);

app.listen(PORT);
