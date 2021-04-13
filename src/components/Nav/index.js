import React, { useContext, useState } from 'react';

// Services
import { notify } from '../../services';
import { logout } from '../../utils/session';

// Context
import AppContext from '../../context';

// Styles
import './nav.scss';

const Nav = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [contextData, setContext] = useContext(AppContext);

    const handleLogout = () => {
        logout();

        setContext({
            ...contextData,
            isAuthenticated: false,
        })
    }

    const handleNotify = async () => {
        const payload = {
            name: 'Paul Reggie Valenzuela',
            email: 'paulreggieevalenzuela@gmail.com',
            repoUrl: 'https://github.com/paulreggieevalenzuela/meld-app',
            message: "I just informed Ms. Jean around April 12 Monday that I'll be working on the exam because I had a family matters last week. Thank you and have a nice day.",
        }

        try {
            await notify(payload);
        } catch (err) {
            console.warn('err notify', err)
        }
    }

    return (
        <nav className="nav">
            <div className="nav__cta">
                <button onClick={handleNotify}>Notify</button>
                <button onClick={handleLogout}>logout</button>
            </div>
        </nav>
    )
}

export default Nav;