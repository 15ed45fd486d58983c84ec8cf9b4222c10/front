// store.ts
import { create } from 'zustand';

interface SimulationSettingsStore {
    trafficDensity: number;
    timeOfDay: number;
    weather: string;
    eventParticipants: number;
    repairType: string;
    city: string;
    district: string;

    setTrafficDensity: (value: number) => void;
    setTimeOfDay: (value: number) => void;
    setWeather: (value: string) => void;
    setEventParticipants: (value: number) => void;
    setRepairType: (value: string) => void;
    setCity: (value: string) => void;
    setDistrict: (value: string) => void;
}

export const useSimulationSettingsStore = create<SimulationSettingsStore>((set) => ({
    trafficDensity: 1,
    timeOfDay: 1,
    weather: '',
    eventParticipants: 0,
    repairType: '',
    city: '',
    district: '',

    setTrafficDensity: (value) => set({ trafficDensity: value }),
    setTimeOfDay: (value) => set({ timeOfDay: value }),
    setWeather: (value) => set({ weather: value }),
    setEventParticipants: (value) => set({ eventParticipants: value }),
    setRepairType: (value) => set({ repairType: value }),
    setCity: (value) => set({ city: value }),
    setDistrict: (value) => set({ district: value }),
}));
