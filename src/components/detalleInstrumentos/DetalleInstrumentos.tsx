import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { InstrumentosInterface } from "../../entities/Instrumentos";
import { InstrumentosService } from "../../services/InstrumentosService";
import './DetalleInstrumentos.css';

const DetalleInstrumentos = () => {
  const { id } = useParams<{ id?: string }>();

  const [detalleInstrumento, setDetalleInstrumento] = useState<InstrumentosInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const detalleInstrumentoData = await InstrumentosService.getElementById(id);
        setDetalleInstrumento(detalleInstrumentoData);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img src={detalleInstrumento?.imagen} className="img-fluid custom-image" alt={detalleInstrumento?.instrumento || 'Detalle del instrumento'} />
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{detalleInstrumento?.instrumento}</h2>
              <h5 className="card-subtitle mb-2 text-muted">{detalleInstrumento?.marca} {detalleInstrumento?.modelo}</h5>
              <p className="card-text">{detalleInstrumento?.descripcion}</p>
              <p className="card-text">Precio: ${detalleInstrumento?.precio}</p>
              <p className={`card-text ${detalleInstrumento?.costoEnvio === 'G' ? 'text-success' : 'text-warning'}`}>
                {detalleInstrumento?.costoEnvio === 'G' && <img src={"../images/camion.png"} alt="Envío Gratis" />} {detalleInstrumento?.costoEnvio === 'G' ? 'Envío gratis a todo el país' : `Costo de Envío Interior de Argentina: $${detalleInstrumento?.costoEnvio}`}
              </p>
              <p className="card-text">{detalleInstrumento?.cantidadVendida} vendidos</p>
              <button className="btn btn-primary">Comprar</button>
              <Link to="/" className="btn btn-secondary ms-2">Volver al inicio</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DetalleInstrumentos;
