import { create } from 'zustand';

interface UseChat {
    isActive: boolean;
    toggleIsActive: () => void;
}

export const useChat = create<UseChat>((set) => ({
    isActive: false,
    toggleIsActive: () => set((state) => ({ isActive: !state.isActive })),
}));
