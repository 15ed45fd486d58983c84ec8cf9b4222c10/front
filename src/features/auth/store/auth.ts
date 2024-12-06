import { create } from 'zustand';
import { IAuth } from '../types/auth';

export const useAuth = create<IAuth>((set) => ({
    isAuth: false,
    setAuth: (value) => set({ isAuth: value }),
}));
