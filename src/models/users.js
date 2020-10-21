const { uuid } = require('uuidv4');


class User {
    static get table() {
        return 'usuario';
    }

    constructor(ObjUser) {
        this.id_usuario = uuid();
        this.email_usuario = '';
        this.nome_usuario = '';
        this.senha_usuario = '';
        this.is_admin = 0;
        Object.assign(this, ObjUser);
    }

}

module.exports = User;