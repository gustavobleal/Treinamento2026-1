import type { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma.js'
import { z } from 'zod'

const roomSchema = z.object({
  nome: z.string().min(5).max(50),
  capacidade: z.number().min(1).max(200),
  local: z.string().min(3).max(100),
  descricao: z.string().min(10).max(255)
})

export default async function roomsController(app: FastifyInstance) {

  app.get('/rooms', async () => {
    const rooms = await prisma.room.findMany()
    return rooms
  })

  app.post('/rooms', async (request, reply) => {
    const result = roomSchema.safeParse(request.body)

    if (!result.success) {
      return reply.status(400).send({ errors: result.error.format() })
    }

    const room = await prisma.room.create({
      data: result.data
    })

    return reply.status(201).send(room)
  })

  app.put('/rooms/:id', async (request, reply) => {
    const { id } = request.params as { id: string }

    const roomExists = await prisma.room.findUnique({ where: { id: Number(id) }})

    if (!roomExists) {
      return reply.status(404).send({ error: 'Sala não encontrada'})
    }

    const result = roomSchema.safeParse(request.body)

    if (!result.success) {
      return reply.status(400).send({ errors: result.error.format() })
    }

    const room = await prisma.room.update({
      where: { id: Number(id) },
      data: result.data
    })

    return reply.send(room)
  })

  app.delete('/rooms/:id', async (request, reply) => {
    const { id } = request.params as { id: string }

    const roomExists = await prisma.room.findUnique({ where: { id: Number(id) }})

    if (!roomExists) {
      return reply.status(404).send({ error: 'Sala não encontrada'})
    }

    await prisma.room.delete({ where: { id: Number(id) }})

    return reply.send({ message: 'Sala removida com sucesso'})
  })
}
