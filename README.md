# NBA Players GraphQL API

This is a graphql api that was created to give the ability of full CRUD of NBA players. Check out the information below on how to interact with the schema.

## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone https://github.com/tyelf22/graphql-API-NodeServer.git
```

Install npm dependencies:

```
cd graphql-API-NodeServer.git
npm install
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

## Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./schema.graphql`](./schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

### Retrieve all players

```graphql
query allPlayers {
  Players {
    id
    firstname
    lastname
    team
    height
    weight
    age
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

### Create a new player

```graphql
mutation createPlayer {
  createPlayer(firstname: "mike", lastname: "conley", team: "jazz", height: "6' 1\"", weight:"175" age: "32"){
    firstname
    lastname
  }
}
```

### Delete a player

```graphql
mutation deleteOnePlayer {
  deleteOnePlayer(where: {
    id: "ck8hwdg4v0002j3h2rr87cynq"
  }) {
    id
    firstname
  }
}
```

### Update a player

```graphql
mutation updatePlayer {
  updatePlayer(id:"ck8hwdg4v0002j3h2rr87cynq", 
    firstname: "updatedfname", 
    lastname: "updatedlname", 
    team: "updatedteam", 
    height: "updatedheight",
    weight:"updatedweight" 
    age: "updatedage"){
    firstname
    lastname
  }
}
```

### Retrive a single player

```graphql
query getPlayer {
  Player(id: ""){
    id
    firstname
  }
}
```
> **Note**: You need to replace the `id`-placeholder with an actual `id` from a `player` item.

### Retrieve players with search parameter

```graphql
query allPlayers {
  Players (searchString: "search string") {
    id
    firstname
    lastname
    team
    height
    weight
    age
  }
}
```
> **Note**: You need to replace the `search string`-placeholder with an actual string.

</Details>

