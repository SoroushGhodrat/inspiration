import React from 'react';
import { FormData } from '../../types/MultiStepForm';
interface Step1Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, setFormData, nextStep }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const firstName = e.target.value;

    setFormData({ ...formData, firstName });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">Step 1</h2>
      <label htmlFor="firstName" className="text-lg">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-md w-full max-w-xs"
      />
      <button
        onClick={nextStep}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
