import React from 'react';
import PropTypes from 'prop-types';

const NameInput = ({value, handleInputChange}) => {
    return (
        <div>
            <input
                type="text"
                value={value}
                name='name'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleInputChange}
            />
        </div>
    )
}

NameInput.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default NameInput;