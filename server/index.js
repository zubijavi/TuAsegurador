import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/dolar-bna", async (req, res) => {
  try {
    const response = await axios.get("https://monedapi.ar/api/usd/bna");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo cotización" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});