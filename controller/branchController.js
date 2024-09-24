import Branch from '../models/branch.js';

// Método GET: Obtener todas las sucursales
export async function getBranches(req, res) {
    try {
        const branches = await Branch.find();
        res.status(200).json({ branches });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las sucursales' });
    }
}

// Método GET: Obtener una sucursal por ID
export async function getOneBranch(req, res) {
    const { id } = req.params;
    try {
        const branch = await Branch.findById(id);
        if (!branch) return res.status(404).json({ message: 'Sucursal no encontrada' });
        res.status(200).json(branch);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la sucursal' });
    }
}

// Método POST: Crear una nueva sucursal
export async function postBranch(req, res) {
    const { name, location, manager, phone, email, status } = req.body;
    let msg = 'Sucursal creada exitosamente';
    try {
        const newBranch = new Branch({ name, location, manager, phone, email, status });
        await newBranch.save();
        res.status(201).json(newBranch);
    } catch (error) {
        msg = 'Error al crear la sucursal';
        res.status(500).json({ message: msg });
    }
}

// Método PUT: Actualizar una sucursal
export async function putBranch(req, res) {
    const { id } = req.params;
    const { name, location, manager, phone, email, status } = req.body;
    let msg = 'Sucursal actualizada exitosamente';
    try {
        const updatedBranch = await Branch.findByIdAndUpdate(
            id,
            { name, location, manager, phone, email, status },
            { new: true }
        );
        if (!updatedBranch) return res.status(404).json({ message: 'Sucursal no encontrada' });
        res.status(200).json(updatedBranch);
    } catch (error) {
        msg = 'Error al actualizar la sucursal';
        res.status(500).json({ message: msg });
    }
}

// Método DELETE: Eliminar una sucursal
export async function deleteBranch(req, res) {
    const { id } = req.params;
    let msg = 'Sucursal eliminada exitosamente';
    try {
        const deletedBranch = await Branch.findByIdAndDelete(id);
        if (!deletedBranch) return res.status(404).json({ message: 'Sucursal no encontrada' });
        res.status(200).json({ message: msg });
    } catch (error) {
        msg = 'Error al eliminar la sucursal';
        res.status(500).json({ message: msg });
    }
}
