import React from 'react';
import { FormData } from '../../types/MultiStepForm';
import { MapPinHouse } from 'lucide-react';

interface Step2Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      deliveryAddress: {
        ...formData.deliveryAddress,
        [name]: value,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <MapPinHouse size={48} color="#2563EB" />
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white capitalize mt-4">
        Delivery Address
      </h1>

      <div className="flex space-x-4 mt-4 w-full max-w-2xl">
        <div className="flex-1">
          <label htmlFor="streetAddress" className="text-lg">
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            placeholder=""
            value={formData.deliveryAddress.streetAddress}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
      </div>

      <div className="flex space-x-4 mt-4 w-full max-w-2xl">
        <div className="flex-1">
          <label htmlFor="city" className="text-lg">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder=""
            value={formData.deliveryAddress.city}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="state" className="text-lg">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder=""
            value={formData.deliveryAddress.state}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
      </div>

      <div className="flex space-x-4 mt-4 w-full max-w-2xl">
        <div className="flex-1">
          <label htmlFor="postalCode" className="text-lg">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder=""
            value={formData.deliveryAddress.postalCode}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
      </div>

      <div className="flex gap-2 mt-10 w-full max-w-2xl">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white py-4 px-8 rounded-md hover:bg-blue-600 text-xl w-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
