import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors';
import knex from 'knex';
import handleSignin from './controllers/signin.js';
import handleRegister from './controllers/register.js'
import handleProfile from './controllers/profile.js';

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'lp195674',
      database : 'webdevdb'
    }
  });


app.get('/', (req , res) =>{
    /* res.send('Funcionalidad get funcionando sin problemas !!'); */
    res.json(database.users);
});

app.get('/profile/:id', (req, res) => {handleProfile(req, res, db)})

app.post('/signin', (req, res) => {handleSignin(req, res, db, bcrypt)})

app.post('/register', (req, res) => {handleRegister(req, res, db, bcrypt)})

app.listen(3002, () => {
    console.log('server running on port 3002 !');
});