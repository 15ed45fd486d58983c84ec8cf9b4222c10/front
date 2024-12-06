export const isAccessTokenExpired = (): boolean => {
    const expiration = localStorage.getItem('tokenExpiration');

    if (!expiration) {
        return true;
    }

    const expTime = parseInt(expiration, 10) * 1000;
    const currentTime = Date.now();

    return currentTime >= expTime;
};
