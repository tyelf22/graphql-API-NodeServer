import { objectType } from 'nexus'

const Player = objectType({
    name: 'Player',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.name()
        t.model.team()
        t.model.height()
        t.model.weight()
        t.model.age()

    }
})

export const Models = [
    Player
]