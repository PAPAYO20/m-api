import express, {json} from 'express'
import dbConnect from '../database/config.js'
import '../database/config.js'
import returnRouter from '../routes/branchRoute.js'
import branchRouter from '../routes/returnsRoute.js'
import cors from 'cors'
import clientsRouter from '../routes/clientsRoute.js'
import productsRouter from '../routes/productsRoute.js'

class Server {
    constructor() {
        this.app = express()
        this.listen()
        this.dbConecction()
        this.pathreturns= '/api/returns'
        this.pathbranch = '/api/branch'
        this.pathProduct = '/api/product'
        this.pathClient = '/api/client'
        this.route()
    }

    async dbConecction() {
        await dbConnect()
    }

    route() {
        this.app.use(json())
        this.app.use(cors())
        this.app.use(this.pathreturns, returnRouter)
        this.app.use(this.pathbranch, branchRouter)
        this.app.use(this.pathClient, clientsRouter)
        this.app.use(this.pathProduct, productsRouter)

    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Server is running')

        })
    }
}

export default Server