import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { FormData } from '../../types/MultiStepForm';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => {
    console.log('Form Submitted', formData);
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-4 p-4 border border-gray-300 bg-gray-100 rounded-md max-w-md w-full">
        {(() => {
          switch (step) {
            case 1:
              return (
                <Step1
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                />
              );
            case 2:
              return (
                <Step2
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              );
            case 3:
              return (
                <Step3
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  submitForm={submitForm}
                />
              );
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
};

export default MultiStepForm;
