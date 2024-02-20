import fastify from "fastify"
import dotenv from "dotenv"
import * as process from "process"
import userRoutes from "./routes/userRoutes"

// env
dotenv.config()
const {PORT} = process.env

// logger
const app = fastify({logger: true})

// routes
app.register(userRoutes, {prefix: "/v1"})

async function start() {
    try {
        app.listen({port: Number(PORT)}, () => {
            console.log(`Server running on port ${PORT}!`)
        })
    } catch (e) {
        app.log.error(e)
        process.exit(1)
    }
}

start()