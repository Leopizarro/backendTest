import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors';
import knex from 'knex';

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

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id: id })
        .then(user => {
            if(user.length) {
                res.json(user[0]);
            } else {
                res.json('Perfil de usuario no encontrado !');
            }
        })
        .catch(err => res.status(400).json('error al obtener el usuario'));
})

app.post('/signin', (req, res) =>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json('Porfavor ingresar credenciales')
    }
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
            if(isValid){
                return db.select('*').from('users')
                    .where('email', '=', req.body.email)
                    .then(user =>{
                        res.json(user[0])
                    })
                    .catch(err => res.json('Error al encontrar usuario'))
            } else {
                res.status(400).json('Credenciales erróneas')
            }
        })
})

app.post('/register', (req, res) =>{
    const {nombre, apellido, username, email, password, comuna, direccion} = req.body;
    const hash = bcrypt.hashSync(password, 10);
        db.transaction(trx => {
            trx.insert({
                hash:hash,
                email:email
            })
            .into('login')
            .returning('email')
            .then(loginEmail =>{
                return trx.insert({
                    email: loginEmail[0],
                    nombre: nombre,
                    apellido: apellido,
                    username: username,
                    comuna: comuna,
                    direccion: direccion,
                    joined: new Date()
                })
                .into('users')
                .returning('*')
                .then(user => {
                    res.json(user[0]);
                })
            })
            .then(trx.commit)
            .catch(trx.rollback)
            })
    .catch(err => res.status(400).json('No se pudo registrar usuario, intente nuevamente'))
})

app.listen(3002, () => {
    console.log('server running on port 3002 !');
});