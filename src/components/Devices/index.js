import React, { useEffect, useState } from 'react';

// Services
import { getDevices } from '../../services';

// Styles
import './devices.scss';

const Devices = () => {
    const [devices, setDevices] = useState([]);

    const browseDevices = async() => {
        const response = await getDevices();

        if (response.status === 200) {
            setDevices(response.data?.devices);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            browseDevices();
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <section className="devices">
            {devices?.length ? (
                <div className="devices-circles">
                    {devices.map((d, i) => <span key={i}>{i}</span>)}
                </div>
            ) : null}
            <div className="devices-count">
                <h1>{devices.length}</h1>
                <p>Devices Online</p>
            </div>
        </section>
    );
}

export default Devices;