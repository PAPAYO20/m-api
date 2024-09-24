import Return from '../models/returns.js';

// Método GET: Obtener todas las devoluciones
export async function getReturns(req, res) {
    try {
        const returns = await Return.find().populate('productId').populate('customerId');
        res.status(200).json({ returns });
    } catch (error) {
        res.status(500).json({ message: 'No existen devoluciones' });
    }
}

// Método GET: Obtener una devolución por ID
export async function getOneReturn(req, res) {
    const { id } = req.params;
    try {
        const returnItem = await Return.findById(id);
        if (!returnItem) return res.status(404).json({ message: 'Devolución no encontrada' });
        res.status(200).json(returnItem);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la devolución' });
    }
}

// Método POST: Crear una nueva devolución
export async function postReturn(req, res) {
    const { productId, customerId, reason, quantity, returnDate } = req.body;
    let msg = 'Devolución creada exitosamente';
    try {
        const newReturn = new Return({ productId, customerId, reason, quantity, returnDate });
        await newReturn.save();
        res.status(201).json(newReturn);
    } catch (error) {
        msg = 'Error al crear la devolución';
        res.status(500).json({ message: msg });
        console.log(error)
    }
}

// Método PUT: Actualizar una devolución
export async function putReturn(req, res) {
    const { id } = req.params;
    const { productId, customerId, reason, quantity } = req.body;
    let msg = 'Devolución actualizada exitosamente';
    try {
        const updatedReturn = await Return.findByIdAndUpdate(id, { productId, customerId, reason, quantity }, { new: true });
        if (!updatedReturn) return res.status(404).json({ message: 'Devolución no encontrada' });
        res.status(200).json(updatedReturn);
    } catch (error) {
        msg = 'Error al actualizar la devolución';
        res.status(500).json({ message: msg });
    }
}

// Método DELETE: Eliminar una devolución
export async function deleteReturn(req, res) {
    const { id } = req.params;
    let msg = 'Devolución eliminada exitosamente';
    try {
        const deletedReturn = await Return.findByIdAndDelete(id);
        if (!deletedReturn) return res.status(404).json({ message: 'Devolución no encontrada' });
        res.status(200).json({ message: msg });
    } catch (error) {
        msg = 'Error al eliminar la devolución';
        res.status(500).json({ message: msg });
    }
}
