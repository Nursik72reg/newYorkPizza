import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonSave = ({ onClick, className, outline, children }) => {

    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    );
};

ButtonSave.propTypes = {
    onClick: PropTypes.func,
};

export default ButtonSave;