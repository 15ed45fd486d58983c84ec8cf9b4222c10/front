import { Container } from '@shared/ui';
import { Navbar } from '../Navbar';
import { Outlet } from 'react-router-dom';
import cls from './Wrapper.module.scss';
import { ToastContainer } from 'react-toastify';
import { useTheme } from 'daskis-ui-kit';
import Toolbar from '../Toolbar/Toolbar';
import { Chat } from '@/entities/chat';

export const Wrapper = () => {
    const { theme } = useTheme();
    return (
        <>
            <main className={cls.main}>
                <Navbar />
                <section className={cls.body}>
                    <Container className={cls.container}>
                        <Toolbar />
                        <div className={cls.mainInfo}>
                            <Outlet />
                        </div>
                        <Chat />
                    </Container>
                </section>
            </main>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme}
            />
        </>
    );
};
