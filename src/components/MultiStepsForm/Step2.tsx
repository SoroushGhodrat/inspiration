import React from 'react';
import { FormData } from '../../types/MultiStepForm';

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lastName = e.target.value;
    setFormData({ ...formData, lastName });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">Step 2</h2>
      <label htmlFor="lastName" className="text-lg">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
        value={formData.lastName}
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
          onClick={nextStep}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
