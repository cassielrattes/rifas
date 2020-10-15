
class Rifa {
    static get table() {
        return 'rifa';
    }

    constructor(ObjUser) {
        this.nome_rifa = '';
        Object.assign(this, ObjUser);
    }

}

module.exports = Rifa;