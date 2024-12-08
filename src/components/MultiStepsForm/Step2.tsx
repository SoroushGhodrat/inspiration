import React from 'react';
import { FormData } from '../../types/MultiStepForm';
import { MapPinHouse } from 'lucide-react';

interface Step2Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <section className="flex flex-col items-center justify-center">
      <header className="mb-10 flex flex-col items-center justify-center text-2xl font-bold capitalize">
        <MapPinHouse size={48} color="#2563EB" aria-label="Delivery Address Icon" />
        <h1 className="mt-4">Step 2</h1>
        <h2 className="mt-4">Delivery Address</h2>
      </header>

      <form className="w-full max-w-2xl space-y-4" aria-labelledby="delivery-address-form">
        <fieldset>
          <legend id="delivery-address-form" className="sr-only">Delivery Address Form</legend>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="streetAddress" className="text-lg">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="Street Address"
                value={formData.deliveryAddress.streetAddress}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label htmlFor="city" className="text-lg">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.deliveryAddress.city}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                placeholder="State"
                value={formData.deliveryAddress.state}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label htmlFor="postalCode" className="text-lg">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.deliveryAddress.postalCode}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-10 flex gap-2">
            <button
              type="button"
              onClick={prevStep}
              className="w-full rounded-md bg-gray-500 px-8 py-2 text-lg text-white hover:bg-gray-600"
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="w-full rounded-md bg-blue-500 px-8 py-2 text-lg text-white hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Step2;