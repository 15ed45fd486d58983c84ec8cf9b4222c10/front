import { lazy } from 'react';

export const lazyLoadComponent = (path: string) => {
    // Поднимаемся до уровня /src и добавляем путь к папке /pages
    const resolvedPath = `/src/pages/ui${path}`;

    return lazy(() =>
        import(`${resolvedPath}`).then((module) => ({
            default: module[Object.keys(module)[0]], // Возвращаем первый экспорт по умолчанию
        })),
    );
};
