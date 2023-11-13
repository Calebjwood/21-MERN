const typeDefs = `
type Query {
    me: Profile
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    saveBook(authers: [Book.authors]!, description: String!, title: String!, bookId: ID!, image: String, link: String!) User
    removeBook(bookId: ID!) User
}

type User {
    _id: ID
    username: String
    email: String 
    bookCount: Int
    savedBooks: [Book]!
}

type Book {
    _id: ID
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}
`