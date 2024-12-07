import { create } from 'zustand';

interface UseChat {
    isActive: boolean;
    id: string | null;
    setId: (id: string) => void;
    toggleIsActive: () => void;
}

export const useIncident = create<UseChat>((set) => ({
    isActive: false,
    id: null,
    setId: (id) => set({ id }),
    toggleIsActive: () => set((state) => ({ isActive: !state.isActive })),
}));
