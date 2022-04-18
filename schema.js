//untuk mendefinisikan skema graph ql

const {gql} = require('apollo-server')




const typeDefs = gql`
    type Mahasiswa{
        _id: ID!,
        firstname: String!,
        lastname: String!,
        email: String!,
        phone: Int!
    }


    type Query{
        getAllMahasiswa: [Mahasiswa]!,

        getMahasiswaById(_id: ID!): Mahasiswa
    }

    type Mutation{
        createMahasiswa(
            firstname: String!,
            lastname: String!,
            email: String!,
            phone: Int!
        ): Mahasiswa!

        updateMahasiswa(
            _id: ID!,
            firstname: String,
            lastname: String,
            email: String,
            phone: Int
        ): Mahasiswa!

        deleteMahasiswa(
            _id: ID!
        ): Boolean
    }
`

module.exports = typeDefs