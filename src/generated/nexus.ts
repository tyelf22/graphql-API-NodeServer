/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PlayerWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Player: { // root type
    age: string; // String!
    createdAt: any; // DateTime!
    firstname: string; // String!
    height: string; // String!
    id: string; // String!
    lastname: string; // String!
    team: string; // String!
    updatedAt: any; // DateTime!
    weight: string; // String!
  }
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PlayerWhereUniqueInput: NexusGenInputs['PlayerWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createPlayer: NexusGenRootTypes['Player']; // Player!
    deleteOnePlayer: NexusGenRootTypes['Player'] | null; // Player
    updatePlayer: NexusGenRootTypes['Player']; // Player!
  }
  Player: { // field return type
    age: string; // String!
    createdAt: any; // DateTime!
    firstname: string; // String!
    height: string; // String!
    id: string; // String!
    lastname: string; // String!
    team: string; // String!
    updatedAt: any; // DateTime!
    weight: string; // String!
  }
  Query: { // field return type
    Player: NexusGenRootTypes['Player'] | null; // Player
    Players: NexusGenRootTypes['Player'][]; // [Player!]!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPlayer: { // args
      age?: string | null; // String
      firstname: string; // String!
      height?: string | null; // String
      lastname: string; // String!
      team: string; // String!
      weight?: string | null; // String
    }
    deleteOnePlayer: { // args
      where: NexusGenInputs['PlayerWhereUniqueInput']; // PlayerWhereUniqueInput!
    }
    updatePlayer: { // args
      age?: string | null; // String
      firstname?: string | null; // String
      height?: string | null; // String
      id?: string | null; // ID
      lastname?: string | null; // String
      team?: string | null; // String
      weight?: string | null; // String
    }
  }
  Query: {
    Player: { // args
      id?: string | null; // ID
    }
    Players: { // args
      searchString?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Player" | "Query";

export type NexusGenInputNames = "PlayerWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}