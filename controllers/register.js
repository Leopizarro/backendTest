const handleRegister = (req, res, db, bcrypt) =>{
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
}

export default handleRegister;