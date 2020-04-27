import { idArg, mutationType, stringArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {

        // t.crud.deleteOnePlayer()
        
        t.field('createPlayer', {
            type: 'Player',
            args: {
                firstname: stringArg({nullable: false}),
                lastname: stringArg({nullable: false}),
                team: stringArg({nullable: false}),
                height: stringArg(),
                weight: stringArg(),
                age: stringArg(),
            },
            resolve: (parent, { firstname, lastname, team, height, weight, age }, ctx) => {
                return ctx.prisma.player.create({
                    data: {
                        firstname,
                        lastname,
                        team,
                        height,
                        weight,
                        age
                    }
                })
            }
        })

        t.field('updatePlayer', {
            type: 'Player',
            args: { 
                id: idArg(),
                firstname: stringArg(),
                lastname: stringArg(),
                team: stringArg(),
                height: stringArg(),
                weight: stringArg(),
                age: stringArg(),
            },
            resolve: (parent, { id, firstname, lastname, team, height, weight, age }, ctx) => {
                return ctx.prisma.player.update({
                    where: {
                        id
                    },
                    data: {
                        firstname,
                        lastname,
                        team,
                        height,
                        weight,
                        age
                    }
                })
            }
        })

        t.field('deleteOnePlayer', {
            type: 'Player',
            args: { 
                id: idArg(),
            },
            resolve: (parent, { id }, ctx) => {
                return ctx.prisma.player.delete({
                    where: {
                        id
                    },
                    // data: {
                    //     firstname,
                    //     lastname,
                    //     team,
                    //     height,
                    //     weight,
                    //     age
                    // }
                })
            }
        })        
    }
})


