const handleProfile = (req, res, db) => {
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
}

export default handleProfile;