import React from 'react';

// Styles
import './field-container.scss';

const FieldContainer = ({ label, error, errorMessage, ...props }) => {
    return (
        <div className="field-container">
            <div className="field-input">
                <input {...props} />
            </div>

            {error && <span className="field-error">*{errorMessage}</span>}
        </div>
    )
}

export default FieldContainer;