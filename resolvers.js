//untuk menghandle requset, seperti controller

const { args } = require('commander')
const MahasiswaModel = require('./models/Mahasiswa')

module.exports = {
    Query: {
        getAllMahasiswa: async() => await MahasiswaModel.find({}),

        getMahasiswaById: async(_, args) => await MahasiswaModel.findById(args._id)
    },

    Mutation: {
        createMahasiswa: async(_, args) => {
            const mahasiswa = new MahasiswaModel(args)
            await mahasiswa.save()
            return mahasiswa
        },

        updateMahasiswa: async(_, args) => {
            const mahasiswa = await MahasiswaModel.findByIdAndUpdate(args._id, args, {new: true})
            return mahasiswa
        },

        deleteMahasiswa: async(_, args) => {
            const mahasiswa = await MahasiswaModel.findByIdAndRemove(args._id)
            if(mahasiswa) return true
            return false
        }
    }
}