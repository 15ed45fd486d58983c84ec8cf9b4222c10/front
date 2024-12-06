import { IJwtPayload } from '../types/token';

export const saveTokenExpiration = (token: IJwtPayload): void => {
    try {
        localStorage.setItem('tokenExpiration', token.exp.toString());
    } catch (error) {
        console.error('Ошибка при сохранении `exp`:', error);
    }
};
