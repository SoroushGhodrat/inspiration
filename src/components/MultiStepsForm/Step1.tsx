import React from 'react';
import { FormData } from '../../types/MultiStepForm';
import { UserRoundPen } from 'lucide-react';
interface Step1Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, setFormData, nextStep }) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInformation: {
        ...formData.personalInformation,
        [name]: value,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <UserRoundPen size={48} color="#2563EB" />
      <h1 className="text-2xl font-bold capitalize mt-4">
        Personal Information
      </h1>

      <div className="flex space-x-4 mt-4">
        <div className="flex-1">
          <label htmlFor="firstName" className="text-lg">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder=""
            value={formData.personalInformation.firstName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full max-w-xs"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="text-lg">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder=""
            value={formData.personalInformation.lastName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full max-w-xs"
          />
        </div>
      </div>

      <div className="flex space-x-4 mt-4">
        <div className="flex-1">
          <label htmlFor="lastName" className="text-lg capitalize">
            date of birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder=""
            value={formData.personalInformation.dateOfBirth}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full max-w-xs"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="gender" className="text-lg capitalize">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.personalInformation.gender}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full max-w-xs"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 mt-10 ">
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 text-lg w-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
