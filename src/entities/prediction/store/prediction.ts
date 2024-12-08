import { create } from 'zustand';

interface FilterState {
    build: string[];
    repair: string[];
    weather: string[];
    events: string[];
    toggleFilter: (type: 'build' | 'repair' | 'weather' | 'events', value: string) => void;
    clearFilters: (type: keyof FilterState) => void;
}

export const usePrediction = create<FilterState>((set) => ({
    build: [],
    repair: [],
    weather: [],
    events: [],
    toggleFilter: (type, value) => {
        set((state) => {
            const currentFilter: string[] = state[type];
            const newFilter = currentFilter.includes(value)
                ? currentFilter.filter((item) => item !== value) // Удаляем значение, если оно уже есть
                : [...currentFilter, value]; // Добавляем значение, если его нет
            return {
                [type]: newFilter,
            };
        });
    },
    clearFilters: (type) => {
        set(() => ({
            [type]: [], // Очищаем фильтр для указанного типа
        }));
    },
}));
