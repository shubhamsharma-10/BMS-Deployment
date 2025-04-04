import express from "express";
import { prismaClient } from "@repo/prisma/client";
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
    res.json({
        msg: "Hello world!"
    })
})

app.post("/signup", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userAccount = await prismaClient.user.create({
        data:{
           username,
           password 
        }
    })
    res.json({
        msg: "Account created",
        userAccount
    })
})

app.listen(3000);