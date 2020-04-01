import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const player_list = fs.readFileSync('prisma/example_files/player_list.json')

function loadPlayerList() {
  const catalog = JSON.parse(player_list)
  // console.log(catalog)
  return catalog.map(player => {
    return {
      data: {
      firstname: player.firstname,
      lastname: player.lastname,
      team: player.team,
      height: player.height,
      weight: player.weight,
      age: player.age
    }
    }
  })
}

// async function createPlayer() {
//   try {
//     await prismaClient.player.create({
//       data: {
//         name: "Lebron James",
//         team: "Los Angeles Laker",
//         height: "6'8\"",
//         weight: "240",
//         age: "35"
//       },
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

async function main() {
    try {
      const allPlayers = loadPlayerList()
      for (let plyr of allPlayers) {
        await prismaClient.player.create(plyr)
        .catch(err => console.log(`Error trying to create players: ${err}`))
      }
    }
    catch(err) {
        console.log(err)
    }
}

main()
.catch(e => console.error(e))
.finally(async () => {
    await prismaClient.disconnect()
})
