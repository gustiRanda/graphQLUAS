const monggose = require('mongoose')

const MahasiswaSchema = new monggose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
})

const Mahasiswa = monggose.model('Mahasiswa', MahasiswaSchema)

module.exports = Mahasiswa