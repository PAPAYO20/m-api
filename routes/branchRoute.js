import { Router } from 'express';
import {
  getReturns,
  getOneReturn,
  postReturn,
  putReturn,
  deleteReturn
} from '../controller/returnsController.js';

const returnRouter = Router();

// Rutas de devoluciones
returnRouter.get('/', getReturns);            // Obtener todas las devoluciones
returnRouter.get('/:id', getOneReturn);       // Obtener una devolución por ID
returnRouter.post('/', postReturn);           // Crear una nueva devolución
returnRouter.put('/:id', putReturn);          // Actualizar una devolución
returnRouter.delete('/:id', deleteReturn);    // Eliminar una devolución

export default returnRouter;
