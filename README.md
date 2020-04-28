# NBA Players GraphQL API

This is a graphql api that was created to give the ability of full CRUD operations of NBA players. Check out the information below on how to interact with the schema.

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

This also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

> **Note**: You will need Docker installed on your local machine for the following scripts to work. If there are permission errors add "sudo" to the beginning of the script.

### 2. Run each npm script in package.json

 ```
 npm run launchDocker
 ``` 
 ``` 
 npm run createDB
 ```     
 ``` 
 npm run generate
 ``` 
 ``` 
 npm run seed
 ```         
 ### Dev Server
 ``` 
 npm run dev
 ``` 
 > **Note**: Navigate to [http://localhost:5555](http://localhost:5555) in browser to view prisma studio         

### Graphql Playground

```javascript
npm start
```
 > **Note**: Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).  

### Errors
If errors occur: 
 ``` 
 npm run nuke
 ``` 
This will delete all docker data associated with container.


## Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./prisma/schema.prisma`](./prisma/schema.prisma). Below are a number of operations that you can send to the API using the GraphQL Playground.

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

### Create a new player

```graphql
mutation createPlayer {
  createPlayer(firstname: "string", lastname: "string", team: "string", height: "string", weight:"string" age: "string"){
    firstname
    lastname
  }
}
```
> **Note**: You need to replace the `string` placeholder with an actual string.


### Delete a player

```graphql
mutation deleteOnePlayer {
  deleteOnePlayer(where: {
    id: "id string"
  }) {
    id
    firstname
  }
}
```
> **Note**: You need to replace the `id string` placeholder with an actual string.


### Update a player

```graphql
mutation updatePlayer {
  updatePlayer(id:"id string", 
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
> **Note**: You need to replace the `id string` placeholder with an actual string.


### Retrive a single player

```graphql
query getPlayer {
  Player(id: ""){
    id
    firstname
  }
}
```
> **Note**: You need to replace the `id` placeholder with an actual `id` from a `player` item.

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
> **Note**: You need to replace the `search string` placeholder with an actual string.

