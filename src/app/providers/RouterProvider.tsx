import { Wrapper } from '@widgets/Wrapper';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { IncidentPage, LoginPage, MainPage, RegisterPage, UserPage } from '@pages/ui';
import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            // <SuspenseProvider>
            <Wrapper />
            // </SuspenseProvider>
        ),
        children: [
            {
                index: true,
                loader: async () => redirect('/map'),
            },
            {
                path: '/map',
                element: <MainPage />,
            },
            {
                path: '/incidents',
                element: <IncidentPage />,
            },
        ],
    },

    {
        path: '/user',
        element: (
            <PrivateRoute>
                {/* <SuspenseProvider> */}
                <Wrapper />
                {/* </SuspenseProvider> */}
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <UserPage />,
            },
        ],
    },

    {
        path: '/auth',
        children: [
            {
                index: true,
                loader: async () => redirect('/auth/login'),
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);
