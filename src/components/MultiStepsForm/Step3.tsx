import React from 'react';
import { FormData } from '../../types/MultiStepForm';

interface Step3Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
  submitForm: () => void;
}

const Step3: React.FC<Step3Props> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  submitForm,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">Step 3</h2>
      <label htmlFor="email" className="text-lg">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-md w-full max-w-xs"
      />
      <div className="flex gap-2">
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

export default Step3;
