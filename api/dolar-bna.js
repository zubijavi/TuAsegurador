export default async function handler(req, res) {
  try {
    const response = await fetch("https://monedapi.ar/api/usd");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo cotización" });
  }
}