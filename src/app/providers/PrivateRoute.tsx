import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { useAuth } from '@/features/auth/store/auth';

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const location = useLocation();
    const isAuth = useAuth((state) => state.isAuth);

    return isAuth ? <>{children}</> : <Navigate to="/auth/login" state={{ from: location }} replace />;
};
