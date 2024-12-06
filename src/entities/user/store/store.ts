import { create } from 'zustand';
import { IUser } from '../types';

interface IUserStore extends IUser {
    setUser: (user: Partial<IUser>) => void;
}

export const useUser = create<IUserStore>((set) => ({
    id: '',
    email: '',
    username: '',
    img: '',
    about: '',
    city: '',
    sex: '',
    setUser: (user: Partial<IUser>) => set(user),
}));
