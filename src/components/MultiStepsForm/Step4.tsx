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
    <div className="flex w-full max-w-3xl flex-col items-center gap-6 capitalize">
      <BookOpenCheck size={48} color="#2563EB" />
      <h2 className="text-2xl font-bold text-gray-800">
        Step 4: Review and Submit
      </h2>

      <section className="w-full max-w-3xl rounded-lg bg-blue-100 p-4 shadow-inner">
        <header className="mb-3">
          <h3 className="text-lg font-semibold text-gray-700">
            Personal Information
          </h3>
        </header>
        <article className="space-y-1">
          <div className="flex justify-between">
            <span>
              <strong>First Name:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.personalInformation.firstName}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Last Name:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.personalInformation.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Gender:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.personalInformation.gender}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Date of Birth:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.personalInformation.dateOfBirth}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Email:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.personalInformation.email}</span>
          </div>
        </article>
      </section>

      <section className="mt-4 w-full max-w-3xl rounded-lg bg-blue-100 p-4 shadow-inner">
        <header className="mb-3">
          <h3 className="text-lg font-semibold text-gray-700">
            Delivery Address
          </h3>
        </header>
        <article className="space-y-1">
          <div className="flex justify-between">
            <span>
              <strong>Street Address:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.deliveryAddress.streetAddress}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>City:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.deliveryAddress.city}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>State:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.deliveryAddress.state}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Postal Code:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.deliveryAddress.postalCode}</span>
          </div>
        </article>
      </section>

      <section className="mt-4 w-full max-w-3xl rounded-lg bg-blue-100 p-4 shadow-inner">
        <header className="mb-3">
          <h3 className="text-lg font-semibold text-gray-700">
            Payment Details
          </h3>
        </header>
        <article className="space-y-1">
          <div className="flex justify-between">
            <span>
              <strong>Card Holder Name:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.paymentDetails.cardHolderName}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Card Holder Family Name:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.paymentDetails.cardHolderFamilyName}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Card Number:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.paymentDetails.cardNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Expiry Date:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.paymentDetails.expiryDate}</span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>CVV:</strong>
            </span>
            <span className="mx-2 flex-grow border-b border-dashed border-gray-400"></span>
            <span>{formData.paymentDetails.cvv}</span>
          </div>
        </article>
      </section>

      <div className="mt-6 flex gap-4">
        <button
          onClick={prevStep}
          className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={submitForm}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
