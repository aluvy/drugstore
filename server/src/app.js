// libs
require('dotenv').config(); // .env 파일 로드

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import detectPort from 'detect-port';
import chalk from 'chalk';

// api
import auth from './api/auth.js';
import bookmarks from './api/bookmarks.js';
import products from './api/products.js';
import docs from './utils/api-doc.js';

// utils
import { authenticateUser } from './utils/auth.js';

// ENV
const MONGODB_URL = process.env.MONGODB_URL;

// mongo db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// mongo DB를 nodeJS에 연결
mongoose
	.connect(MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('connected'))
	.catch(e => console.log('mongodb connection failed', e));
mongoose.Promise = global.Promise;

// server setup
let port;
async function configServer() {
	port = 3000 || (await detectPort(3000));
}
configServer();

// express setup
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // log request

// express routers
app.use('/', auth);
app.use('/bookmarks', authenticateUser, bookmarks);
app.use('/products', products);

// api docs
app.use('/api', docs);

// start
app.listen(port, () => console.log(`${chalk.white.bgHex('#41b883').bold(`VUE TIL SERVER IS RUNNING ON ${port}`)}`));
