export default function Formulario({ type = "auto" }) {
  return (
    <div className="flex flex-col gap-3 w-full bg">

      {type === "auto" ? (
        <>
          <input
            className="border p-3 rounded"
            placeholder="Año del vehículo"
          />

          <input
            className="border p-3 rounded"
            placeholder="Marca"
          />

          <input
            className="border p-3 rounded"
            placeholder="Modelo"
          />

          <input
            className="border p-3 rounded"
            placeholder="Código Postal"
          />

          <select className="border p-3 rounded">
            <option>¿Tiene GNC?</option>
            <option>Sí</option>
            <option>No</option>
          </select>

          <input
            className="border p-3 rounded"
            placeholder="Contacto"
          />
        </>
      ) : (
        <>
          <input
            className="border p-3 rounded"
            placeholder="CUIT"
          />

          <input
            className="border p-3 rounded"
            placeholder="Provincia"
          />

          <input
            className="border p-3 rounded"
            placeholder="Partido"
          />

          <input
            className="border p-3 rounded"
            placeholder="Cultivo"
          />

          <input
            className="border p-3 rounded"
            placeholder="Suma Asegurada"
          />
        </>
      )}

    </div>
  );
}