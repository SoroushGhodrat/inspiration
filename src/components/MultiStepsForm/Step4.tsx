import React from 'react';
import { FormData } from '../../types/MultiStepForm';
import { BookOpenCheck } from 'lucide-react';

interface Step3Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
  submitForm: () => void;
}

const Step4: React.FC<Step3Props> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  submitForm,
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
    <div className="flex flex-col items-center gap-6 p-6 bg-white shadow-md rounded-lg">
      <BookOpenCheck size={48} color="#1747d9" />
      <h2 className="text-2xl font-bold text-gray-800">
        Step 4: Review and Submit
      </h2>

      <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Personal Information
        </h3>
        <div className="space-y-1">
          <p>
            <strong>First Name:</strong>
            {formData.personalInformation.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {formData.personalInformation.lastName}
          </p>
          <p>
            <strong>Gender:</strong> {formData.personalInformation.gender}
          </p>
          <p>
            <strong>Date of Birth:</strong>
            {formData.personalInformation.dateOfBirth}
          </p>
          <p>
            <strong>Email:</strong> {formData.personalInformation.email}
          </p>
        </div>
      </div>

      <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-inner mt-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Delivery Address
        </h3>
        <div className="space-y-1">
          <p>
            <strong>Street Address:</strong>
            {formData.deliveryAddress.streetAddress}
          </p>
          <p>
            <strong>City:</strong> {formData.deliveryAddress.city}
          </p>
          <p>
            <strong>State:</strong> {formData.deliveryAddress.state}
          </p>
          <p>
            <strong>Postal Code:</strong> {formData.deliveryAddress.postalCode}
          </p>
        </div>
      </div>

      <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-inner mt-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Payment Details
        </h3>
        <div className="space-y-1">
          <p>
            <strong>Card Holder Name:</strong>
            {formData.paymentDetails.cardHolderName}
          </p>
          <p>
            <strong>Card Holder Family Name:</strong>
            {formData.paymentDetails.cardHolderFamilyName}
          </p>
          <p>
            <strong>Card Number:</strong> {formData.paymentDetails.cardNumber}
          </p>
          <p>
            <strong>Expiry Date:</strong> {formData.paymentDetails.expiryDate}
          </p>
          <p>
            <strong>CVV:</strong> {formData.paymentDetails.cvv}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={submitForm}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
