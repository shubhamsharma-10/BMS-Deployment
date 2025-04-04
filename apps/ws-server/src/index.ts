import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/prisma/client"

const server = new WebSocketServer({
    port : 3001
})

server.on("connection", async(socket) => {
     await prismaClient.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    socket.send("Hii there you are connected to the server")
})