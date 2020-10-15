const connection = require("./connection");

class DataUtils {
    static insert(obj, tb, cb) {
        connection.query(`INSERT INTO ${tb} SET ?`, obj, (err, res) => {
            if (err) throw err
            cb(res);
        })
    }

    static select(tb, cb) {
        connection.query(`SELECT * FROM ${tb}`, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }

    static delete(tb, pk, cb) {
        connection.query(`DELETE FROM ${tb} WHERE ${pk.key}=?`, pk.value, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }

    static put(obj, tb, pk, cb) {
        connection.query(`UPDATE ${tb} SET ? WHERE ${pk.key}=?`, [obj, pk.value], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = DataUtils;