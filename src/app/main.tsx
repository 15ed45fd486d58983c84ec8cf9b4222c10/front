import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'daskis-ui-kit';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers';
import 'daskis-ui-kit/dist/styles/main.css';
import './styles/global.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@shared/api/axios';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </QueryClientProvider>
    </ThemeProvider>,
);
