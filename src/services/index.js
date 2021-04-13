import axios from 'axios';

import { getToken }  from '../utils/session';

export const login = async (payload) => {
    const URL = 'http://35.201.2.209:8000/login';

    return await axios.post(URL, payload);
};

export const getDevices = async () => {
    const URL = 'http://35.201.2.209:8000/devices';

    return await axios.get(URL);
};

export const notify = async (payload) => {
    const token = getToken();
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    };

    const URL = 'http://35.201.2.209:8000/notify';

    return await axios.post(URL, payload, config);
};