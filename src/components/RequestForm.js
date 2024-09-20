import React, { useState } from 'react';
import axios from 'axios';

function RequestForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        vehicleModel: '',
        address: '',
        yourMessage: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'number') {
            if (value.length <= 10 && /^\d*$/.test(value)) {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const numberPattern = /^[0-9]{10}$/;

        // Check if the phone number is exactly 10 digits
        if (!numberPattern.test(formData.number)) {
            setErrorMessage("Number must be exactly 10 digits.");
            return; // Stop form submission
        } else {
            setErrorMessage(''); // Clear the error message if the number is valid
        }

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/request`, formData)
            .then(response => {
                console.log('Request saved successfully:', response.data);
                alert("Thank you for reponse");
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    vehicleModel: '',
                    address: '',
                    yourMessage: ''
                });
            })
            .catch(error => {
                console.error('There was an error saving the request:', error);
            });
    };

  
    return (
        <div>

        <div class="contact-form">
                <form  onSubmit={handleSubmit}>
                    <label for="name">Name<span>*</span></label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                    
                    <label for="email">Email<span>*</span></label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                    
                    <label for="number">Number<span>*</span></label>
                    <input type="tel" id="number" name="number" value={formData.number} onChange={handleChange} pattern="[0-9]{10}" required/>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    
                    <label for="vehicle-model">Vehicle Model</label>
                    <input type="text" id="vehicle-model" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} />
                    
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}/>
                    
                    <label for="message">Your Message</label>
                    <textarea id="message" name="yourMessage" rows="4" value={formData.yourMessage} onChange={handleChange} required></textarea>
                    
                    <button type="submit">Send Request</button>
                </form>
            </div>
        </div>
    )
}

export default RequestForm; 