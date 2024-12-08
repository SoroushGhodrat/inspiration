import React from 'react';
import { CreditCard } from 'lucide-react'; // Replace with the actual import
import { FormData } from '../../types/MultiStepForm';

interface Step3Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
}

const Step3: React.FC<Step3Props> = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      paymentDetails: {
        ...formData.paymentDetails,
        [name]: value,
      },
    });
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <header className="mb-10 flex flex-col items-center justify-center text-2xl font-bold capitalize">
        <CreditCard size={48} color="#2563EB" aria-label="Credit Card Icon" />
        <h1 className="mt-4">Step 3</h1>
        <h2 className="mt-4">Payment Details</h2>
      </header>

      <form className="w-full max-w-2xl space-y-4" aria-labelledby="payment-details-form">
        <fieldset>
          <legend id="payment-details-form" className="sr-only">Payment Details Form</legend>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="cardHolderName" className="text-lg">
                Card Holder Name
              </label>
              <input
                type="text"
                id="cardHolderName"
                name="cardHolderName"
                placeholder="Card Holder Name"
                value={formData.paymentDetails.cardHolderName}
                onChange={handleInputChange}
                className="w-full max-w-xs rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cardHolderFamilyName" className="text-lg">
                Card Holder Family Name
              </label>
              <input
                type="text"
                id="cardHolderFamilyName"
                name="cardHolderFamilyName"
                placeholder="Card Holder Family Name"
                value={formData.paymentDetails.cardHolderFamilyName}
                onChange={handleInputChange}
                className="w-full max-w-xs rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cardNumber" className="text-lg">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="****-****-****-****"
              value={formData.paymentDetails.cardNumber}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="expiryDate" className="text-lg">
                Expiry Date
              </label>
              <input
                type="month"
                id="expiryDate"
                name="expiryDate"
                value={formData.paymentDetails.expiryDate}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="text-lg">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="XXX"
                value={formData.paymentDetails.cvv}
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

export default Step3;