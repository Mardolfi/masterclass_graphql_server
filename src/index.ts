import 'reflect-metadata'
import { UserResolver } from './resolvers/UserResolver';
import { ApolloServer } from "apollo-server";
import path from "path";
import { buildSchema } from "type-graphql";

async function main() {
    const schema = await buildSchema({
        resolvers: [
            UserResolver
        ],
        emitSchemaFile: path.join(__dirname, '..', 'schema.gql')
    })

    const server = new ApolloServer({
        schema,
    })

    const {url} = await server.listen()

    console.log(`Server running at ${url}`)
}

main()