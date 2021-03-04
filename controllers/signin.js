const handleSignin = (req, res, db, bcrypt) =>{
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
}

export default handleSignin;