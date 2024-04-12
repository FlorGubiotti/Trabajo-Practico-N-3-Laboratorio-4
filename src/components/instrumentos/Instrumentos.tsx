import { useEffect, useState } from "react"
import { InstrumentosInterface } from "../../entities/Instrumentos"
import { InstrumentosService } from "../../services/InstrumentosService";
import './Instrumentos.css';
import { Link } from "react-router-dom";

const Instrumentos = () => {

    const [instrumentos, setInstrumentos] = useState<InstrumentosInterface[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const instrumentosData = await InstrumentosService.getAllInstruments();
            setInstrumentos(instrumentosData)
        };
        fetchData()
    }, []);

    return (
        <div className="container">
            {instrumentos.map((instrumento, index) => (
                <Link to={`/detalle/${instrumento.id}`} className="card-link">
                    <div key={index} className="card mb-3" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={instrumento.imagen} className="img-fluid rounded-start" alt={instrumento.instrumento} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{instrumento.instrumento}</h5>
                                    <p className="card-text"> $ {instrumento.precio}</p>
                                    <p className={`card-text ${instrumento.costoEnvio === 'G' ? 'text-success' : 'text-warning'}`}>
                                        {instrumento.costoEnvio === 'G' && <img src={"public/images/camion.png"} alt="Envío Gratis" />} {instrumento.costoEnvio === 'G' ? 'Envío gratis a todo el país' : `Costo de Envío Interior de Argentina: $${instrumento.costoEnvio}`}
                                    </p>
                                    <p className="card-text"><small className="text-body-secondary">{instrumento.cantidadVendida} vendidos</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

            ))}
        </div>
    )
}

export default Instrumentos