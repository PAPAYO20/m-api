import Clients from "../models/clients.js"; // Correct the import statement

export const getClients = async (req, res) => {
  try {
    const clientsList = await Clients.find(); // Use the correct model name
    res.json(clientsList);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong retrieving the clients",
    });
  }
}

export const createClient = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: 'Client name can not be empty' });
  }

  try {
    const newClient = new Clients({ // Use the correct model name
      name: req.body.name,
    });

    const client = await newClient.save();
    res.json(client);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong creating the client",
    });
  }
}