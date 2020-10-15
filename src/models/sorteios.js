
class Sorteio {
    static get table() {
        return 'sorteio';
    }

    constructor(ObjUser) {
        this.numero = 0;
        this.id_rifa = 0;
        this.id_usuario = '';
        Object.assign(this, ObjUser);
    }

}

module.exports = Sorteio;