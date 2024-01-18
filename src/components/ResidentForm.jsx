import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "./styles/ResidentForm.css";

const ResidentForm = ({handleSubmit, theme, changeTheme, searching}) => {
    const [dimensionId, setDimensionId] = useState("");

    const showAlert = (message) => {
        if (!searching) {
          Swal.fire({
            icon: 'warning',
            title: 'Ups no hay nadie aquí!',
            text: message,
          });
        }
    };    

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (!/^\d+$/.test(inputValue) && inputValue !== "") {
          showAlert('Ingrese un número válido para la dimensión.');
          return;
        }
        setDimensionId(inputValue);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!dimensionId) {
          showAlert('Ingrese un número de dimensión.');
          return;
        }
        handleSubmit(e);
    };

    return (
        <form onSubmit={handleFormSubmit} className="dimensionFilter">
            <div onClick={changeTheme} className='dimensionFilter__icon dimensionFilter__icon--link'>
                <i className={`navbar__icon bx bx-${theme === "light" ? "moon" : "sun"}`}></i>
            </div>
            <input 
                className='dimensionFilter__input' 
                type="text" 
                id='idLocation' 
                placeholder='type a location id'
                value={dimensionId}
                onChange={handleInputChange}
            />
            <button className='dimensionFilter__icon'><i className='bx bx-search-alt-2'></i></button>
        </form>
    )
}

export default ResidentForm
