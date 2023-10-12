const {readFileSync} = require("fs");
const db = readFileSync('db.json', 'utf8');
class UserController {
    async getAll(req, res) {
        const arrDB = JSON.parse(db)

        const {email, number} = req.body

        let newNumber = ''

        if(number !== null) {
            number.split('-').forEach(item => {
                newNumber += item
            })
        }

        const result = arrDB.filter(item => number !== null ?
            item.email === email && item.number === newNumber :
            item.email === email)

        setTimeout(()=>res.json(result), 5000)
    }
}

module.exports = new UserController()