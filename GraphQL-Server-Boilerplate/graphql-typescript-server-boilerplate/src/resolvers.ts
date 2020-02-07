import { ResolverMap } from "./types/graphql-utils"

export const resolvers: ResolverMap = {
  Query: {
    hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || 'World'}`,
  },

  Mutation: {
    register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {}
  }

};

// we use a library called GQL2TS to get the type of the arguments