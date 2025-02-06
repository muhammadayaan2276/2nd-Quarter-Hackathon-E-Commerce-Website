import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    setInvalidEmail(false); // Reset invalid email state when typing
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Check if email contains '@'
    if (!email.includes('@')) {
      setInvalidEmail(true);
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Simulate a successful subscription
    setSuccessMessage('Successfully subscribed!');
    setEmail(''); // Reset the email input
    setErrorMessage(''); // Clear error message, if any

    // Optionally, simulate a delay like an API call
    setTimeout(() => {
      setSuccessMessage(''); // Optionally hide the success message after a few seconds
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="relative rounded-full border border-gray-300 px-4 py-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.894 7.894"
            />
          </svg>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            className="pl-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Subscribe
        </button>
      </form>

      {/* Show error message if the email is invalid */}
      {invalidEmail && !successMessage && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}

      {/* Show success message if the subscription was successful */}
      {successMessage && (
        <p className="text-green-500 mt-2">{successMessage}</p>
      )}

      {/* Show error message for other failure reasons */}
      {errorMessage && !invalidEmail && !successMessage && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default SubscriptionForm;
