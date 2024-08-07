import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        secId: '',
        registrationNumber: '',
        dept: '',
        section: '',
        year: '',
        email: '',
        phoneNumber: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:3000/api/participant', formData);
            setResponseMessage(response.data.message);
            setShowSuccess(true);

            // Clear form fields after successful registration
            setFormData({
                name: '',
                secId: '',
                registrationNumber: '',
                dept: '',
                section: '',
                year: '',
                email: '',
                phoneNumber: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setResponseMessage('Error submitting form');
            setShowSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative">
            {showSuccess && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4">
                        <h3 className="text-lg font-semibold mb-4 text-green-600">Success!</h3>
                        <p>{responseMessage}</p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Participant Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="secId">SEC ID</label>
                        <input
                            type="text"
                            id="secId"
                            name="secId"
                            value={formData.secId}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="registrationNumber">Registration Number</label>
                        <input
                            type="text"
                            id="registrationNumber"
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="dept">Department</label>
                        <input
                            type="text"
                            id="dept"
                            name="dept"
                            value={formData.dept}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="section">Section</label>
                        <input
                            type="text"
                            id="section"
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="year">Year</label>
                        <input
                            type="number"
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-2 rounded-md ${isSubmitting ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;
