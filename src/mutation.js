import { idArg, mutationType, stringArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
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
    }
})


