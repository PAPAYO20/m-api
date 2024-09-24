import { Router } from "express";
import { createClient, getClients } from "../controller/clientsController.js";


const clientsRouter = Router()

clientsRouter.get('/', getClients)
clientsRouter.post('/', createClient)

export default clientsRouter