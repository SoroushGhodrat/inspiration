import React from 'react';
import { FormData } from '../../types/MultiStepForm';
import { CreditCard } from 'lucide-react';

interface Step3Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
}

const Step3: React.FC<Step3Props> = ({
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
      paymentDetails: {
        ...formData.paymentDetails,
        [name]: value,
      },
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <CreditCard size={48} color="#1747d9" />
      <h2 className="text-2xl font-bold">Step 3: Payment Details</h2>

      <div className="flex space-x-4 w-full max-w-md">
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
            className="border border-gray-300 p-2 rounded-md w-full"
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
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
      </div>

      <div className="flex flex-col w-full max-w-md mt-4">
        <label htmlFor="cardNumber" className="text-lg">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.paymentDetails.cardNumber}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>

      <div className="flex space-x-4 w-full max-w-md mt-4">
        <div className="flex-1">
          <label htmlFor="expiryDate" className="text-lg">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            value={formData.paymentDetails.expiryDate}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
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
            placeholder="CVV"
            value={formData.paymentDetails.cvv}
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

export default Step3;
