export const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Bye ${name || 'World'}`,
  },
}

// we use a library called GQL2TS to get the type of the arguments