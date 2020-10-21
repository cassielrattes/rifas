
class Rifa {
    static get table() {
        return 'rifa';
    }

    constructor(ObjUser) {
        this.nome_rifa = '';
        this.foto_rifa = '';
        Object.assign(this, ObjUser);
    }

}

module.exports = Rifa;