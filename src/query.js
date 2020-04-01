import { idArg, queryType, stringArg } from 'nexus'

export const Query = queryType({
    definition(t) {
        t.field('Player', {
            type: 'Player',
            nullable: true,
            args: {id: idArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.prisma.player.findOne({
                    where: {
                        id,
                    }
                })
            }
        })

        // t.list.field('Players', {
        //     type: 'Player',
        //     resolve: (parent, args, ctx) => {
        //         return ctx.prisma.player.findMany()
        //     }
        // })

        t.list.field('Players', {
            type: 'Player',
            args: {
                searchString: stringArg({nullable: true})
            },
            resolve: (parent, { searchString }, ctx) => {
                return ctx.prisma.player.findMany({
                    where: {
                        OR: [
                            { firstname: {contains: searchString}},
                            { team: {contains: searchString}},
                        ]
                    }
                })
            }
        })

    }
})