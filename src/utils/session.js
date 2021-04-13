const localStorage = window.localStorage;

const setToken = (token) => {
    if (token) {
        localStorage.setItem('token', token);
    } else {
        logout();
    }
}

const getToken = () => {
    return localStorage.getItem('token');
}

const logout = () => {
    localStorage.removeItem('token');
    localStorage.clear();
}

export {
    logout,
    getToken,
    setToken
}