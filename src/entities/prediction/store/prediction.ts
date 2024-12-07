import { create } from 'zustand';
import { IncidentTypeEnum } from '@/entities/incident'; // Импортируйте IncidentTypeEnum

interface FilterState {
    severity: string | null;
    status: string | null;
    types: IncidentTypeEnum[];
    time: number | null;
    setTime: (time: number) => void;
    setSeverity: (severity: string | null) => void;
    setStatus: (status: string | null) => void;
    setTypes: (types: IncidentTypeEnum[]) => void;
    resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    severity: null,
    status: null,
    types: [],
    time: 0,
    setTime: (time) => set({ time }),
    setSeverity: (severity) => set({ severity }),
    setStatus: (status) => set({ status }),
    setTypes: (types) => set({ types }),
    resetFilters: () => set({ severity: null, status: null, types: [] }),
}));
