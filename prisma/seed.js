import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function createPost() {
  try {
    await prismaClient.post.create({
      data: {
        title: 'The second post by Tyson',
      },
    })
  } catch (err) {
    console.log(err)
  }
}

async function main() {
    try {
        await createPost()
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
