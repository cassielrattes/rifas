const connection = require('../helpers/connection');

class UserDAO {
    authenticate(usuario, cb) {
        const sql = 'SELECT id_usuario FROM usuario WHERE email_usuario=? and senha_usuario=? ';
        connection.query(sql, [usuario.email_usuario, usuario.senha_usuario], (err, res) => {
            if (err) throw err;
            cb(res[0]);
        });
    }
}

module.exports = UserDAO;