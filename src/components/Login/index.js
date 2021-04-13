import React, { useContext, useState } from 'react';

import FieldContainer from '../FieldContainer';

// Services
import { login } from '../../services';

// Utility
import { setToken } from '../../utils/session';

// Context
import AppContext from '../../context';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState({});
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const [contextData, setContext] = useContext(AppContext);
    const submit = async() => {
        try {
            const resp = await login(formData);

            if (resp.status === 200) {
                setToken(resp.data);
                setContext({ ...contextData, isAuthenticated: !!resp.data });
                setErrorMessage({})
            }
            
        } catch(err) {
            console.log('err', err);
            setErrorMessage({
                password: 'The password is invalid.',
                email: 'The email address is invalid.'
            });
        }
    }
    
    return (
        <section className="login">
            <h3 className="login__title">Login</h3>
                <FieldContainer 
                    type="text"
                    label="Email Address"
                    placeholder="Email Address"
                    name="email"
                    error={!!errorMessage?.email}
                    errorMessage={errorMessage?.email}
                    onChange={handleFormData}
                />
                <FieldContainer 
                    type="password"
                    label="Password" 
                    placeholder="Password"
                    name="password"
                    error={!!errorMessage?.password}
                    errorMessage={errorMessage?.password}
                    onChange={handleFormData}
                />
            <div className="login__actions">
                <button 
                    className="cta"
                    onClick={submit}
                >
                    Log In
                </button>
            </div>
        </section>
    );
}

export default Login;