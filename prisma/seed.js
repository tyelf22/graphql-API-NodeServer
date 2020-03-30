import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function createPlayer() {
  try {
    await prismaClient.player.create({
      data: {
        name: "Lebron James",
        team: "Los Angeles Laker",
        height: "6'8\"",
        weight: "240",
        age: "35"
      },
    })
  } catch (err) {
    console.log(err)
  }
}

async function main() {
    try {
        await createPlayer()
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
