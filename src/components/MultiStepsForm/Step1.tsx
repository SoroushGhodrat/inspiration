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
    <section className="flex flex-col items-center justify-center">
      <header className="mb-10 flex flex-col items-center justify-center text-2xl font-bold capitalize">
        <UserRoundPen size={48} color="#2563EB" aria-label="User Icon" />
        <h1 className="mt-4">Step 1</h1>
        <h2 className="mt-4">Personal Information</h2>
      </header>

      <form className="w-full max-w-2xl space-y-4" aria-labelledby="personal-information-form">
        <fieldset>
          <legend id="personal-information-form" className="sr-only">Personal Information Form</legend>
          <div className="flex space-x-4 mb-5">
            <div className="flex-1">
              <label htmlFor="firstName" className="text-lg">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.personalInformation.firstName}
                onChange={handleInputChange}
                className="w-full max-w-xs rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                placeholder="Last Name"
                value={formData.personalInformation.lastName}
                onChange={handleInputChange}
                className="w-full max-w-xs rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="dateOfBirth" className="text-lg capitalize">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.personalInformation.dateOfBirth}
                onChange={handleInputChange}
                className="w-full max-w-xs rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                className="w-full max-w-xs rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="mt-10 flex gap-2">
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

export default Step1;