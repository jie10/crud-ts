import {FastifyInstance, FastifyPluginAsync} from "fastify"

const userRoutes: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
    fastify.get("/user", async () => {
        return {msg: "Hello user"}
    })
}

export default userRoutes