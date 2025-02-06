'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

type FormData = {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo?: string;
};

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange', // Validate the form on each change
  });

  const router = useRouter(); // Hook for navigation

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data);
    // Handle form submission logic here (e.g., send data to the server)
    
    // Navigate to the place order page upon successful form submission
    router.push('/placeorder');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Billing details</h2>
      <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <input
          type="text"
          placeholder="First Name"
          {...register('firstName', {
            required: 'First Name is required',
            minLength: {
              value: 3,
              message: 'First Name must be at least 3 characters',
            },
            maxLength: {
              value: 50,
              message: 'First Name cannot be longer than 50 characters',
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'First Name must only contain letters',
            },
          })}
          className="col-span-1 border border-gray-300 rounded p-5"
        />
        {errors.firstName && (
          <span className="text-red-500">{errors.firstName.message}</span>
        )}

        {/* Last Name */}
        <input
          type="text"
          placeholder="Last Name"
          {...register('lastName', {
            required: 'Last Name is required',
            minLength: {
              value: 3,
              message: 'Last Name must be at least 3 characters',
            },
            maxLength: {
              value: 50,
              message: 'Last Name cannot be longer than 50 characters',
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'Last Name must only contain letters',
            },
          })}
          className="col-span-1 border border-gray-300 rounded p-5"
        />
        {errors.lastName && (
          <span className="text-red-500">{errors.lastName.message}</span>
        )}

        {/* Company Name */}
        <input
          type="text"
          placeholder="Company Name (Optional)"
          {...register('companyName', {
            maxLength: {
              value: 100,
              message: 'Company Name cannot be longer than 100 characters',
            },
          })}
          className="col-span-2 border border-gray-300 rounded p-5"
        />

        {/* Country */}
        <select
          {...register('country', {
            required: 'Country is required',
          })}
          className="col-span-2 border border-gray-300 rounded p-5"
        >
          <option value="">Country / Region</option>
          {[
            'Pakistan',
            'India',
            'United States',
            'Canada',
            'United Kingdom',
            'Germany',
            'France',
            'Australia',
            'China',
            'Japan',
            'Sri Lanka',
            'Bangladesh',
            'South Africa',
            'Brazil',
            'Mexico',
            'Italy',
            'Spain',
            'Russia',
            'Turkey',
            'Indonesia',
            'Netherlands',
            'Saudi Arabia',
            'Argentina',
            'Sweden',
            'Switzerland',
            'Poland',
            'South Korea',
            'Egypt',
            'Thailand',
            'Malaysia',
            'Vietnam',
            'Philippines',
          ].map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && (
          <span className="text-red-500">{errors.country.message}</span>
        )}

        {/* Street Address */}
        <input
          type="text"
          placeholder="Street Address"
          {...register('streetAddress', {
            required: 'Street Address is required',
            minLength: {
              value: 5,
              message: 'Street Address must be at least 5 characters',
            },
            maxLength: {
              value: 150,
              message: 'Street Address cannot be longer than 150 characters',
            },
          })}
          className="col-span-2 border border-gray-300 rounded p-5"
        />
        {errors.streetAddress && (
          <span className="text-red-500">{errors.streetAddress.message}</span>
        )}

        {/* City */}
        <input
          type="text"
          placeholder="City"
          {...register('city', { required: 'City is required' })}
          className="col-span-2 border border-gray-300 rounded p-5"
        />
        {errors.city && (
          <span className="text-red-500">{errors.city.message}</span>
        )}

        {/* ZIP Code */}
        <input
          type="text"
          placeholder="ZIP Code"
          {...register('zipCode', {
            required: 'ZIP Code is required',
            pattern: {
              value: /^[0-9]{5,6}$/,
              message: 'Invalid ZIP Code format',
            },
          })}
          className="col-span-2 border border-gray-300 rounded p-5"
        />
        {errors.zipCode && (
          <span className="text-red-500">{errors.zipCode.message}</span>
        )}

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone"
          {...register('phone', {
            required: 'Phone is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone must be a 10-digit number',
            },
          })}
          className="col-span-2 border border-gray-300 rounded p-5"
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email format',
            },
          })}
          className="col-span-2 border border-gray-300 rounded p-5"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        {/* Additional Information */}
        <textarea
          placeholder="Additional Information"
          {...register('additionalInfo', {
            maxLength: {
              value: 500,
              message: 'Additional Information cannot exceed 500 characters',
            },
          })}
          className="col-span-2 border border-gray-300 rounded p-5 h-20"
        ></textarea>

        {/* Place Order Button */}
        <button
          type="submit"
          className="w-full bg-lightyellow hover:bg-darkyellow text-black py-3 px-4 rounded shadow"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
