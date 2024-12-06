import { ReactNode, createContext, useEffect } from 'react';
import { useMe } from '@/features/auth/hooks/useMe';
import { useAuth } from '@/features/auth/store/auth';
import { useUser } from '@/entities/user';

export const AuthContext = createContext<undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { data, isLoading, isSuccess, isError } = useMe();
    const isAuth = useAuth((state) => state.isAuth);
    const setAuth = useAuth((state) => state.setAuth);
    const setUser = useUser((state) => state.setUser);
    useEffect(() => {
        if (data) {
            setUser(data);
        }
        if (isSuccess) {
            setUser(data);
            setAuth(true);
        }
        if (isError) {
            setAuth(false);
        }
    }, [data]);

    if (isLoading) {
        return <></>;
    }

    if (isSuccess && isAuth) {
        return <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>;
    }

    if (isError) {
        return <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>;
    }

    // Также можно обработать случай, если запрос не завершился
    return <></>;
};
