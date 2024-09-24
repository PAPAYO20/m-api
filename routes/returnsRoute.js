import { Router } from 'express';
import {
  getBranches,
  getOneBranch,
  postBranch,
  putBranch,
  deleteBranch
} from '../controller/branchController.js';

const branchRouter = Router();

// Rutas de sucursales
branchRouter.get('/', getBranches);               // Obtener todas las sucursales
branchRouter.get('/:id', getOneBranch);           // Obtener una sucursal por ID
branchRouter.post('/', postBranch);               // Crear una nueva sucursal
branchRouter.put('/:id', putBranch);              // Actualizar una sucursal
branchRouter.delete('/:id', deleteBranch);        // Eliminar una sucursal

export default branchRouter;
