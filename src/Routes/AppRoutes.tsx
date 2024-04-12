import { BrowserRouter, Route, Routes } from "react-router-dom"
import Instrumentos from "../components/instrumentos/Instrumentos"
import DetalleInstrumentos from "../components/detalleInstrumentos/DetalleInstrumentos"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Instrumentos />}/>
            <Route path="/detalle/:id" element={<DetalleInstrumentos />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes