import { InstrumentosInterface } from "../entities/Instrumentos";
import { instrumentos } from "./../../public/local/data";

export const InstrumentosService = {

    getAllInstruments: async (): Promise<InstrumentosInterface[]> => {
        return instrumentos;
        
    },

    getElementById: async (id: string): Promise<InstrumentosInterface | null> => {
        const response = instrumentos.find(item => item.id === id);
        return response || null;
    }
}