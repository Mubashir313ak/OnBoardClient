// src/components/MultiStepForm.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import { nextStep, prevStep } from 'src/redux/slices/formSlice';
import JwtRegisterView from './jwt-register-view';
import UserTypeForm from './step1';

// Import other forms here...

const steps = ['Sign Up', 'User Type', 'Form 3', 'Form 4', 'Form 5', 'Form 6'];

const MultiStepForm = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.form.activeStep);

  const handleNext = () => dispatch(nextStep());
  const handleBack = () => dispatch(prevStep());

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <JwtRegisterView />;
      case 1:
        return <UserTypeForm />;
      // Add more forms here based on step index...
      default:
        return <div>Complete!</div>;
    }
  };

  return (
    <Box sx={{ width: '50%', margin: '0 auto', textAlign: 'center', pt: 3 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 2 }}>{renderForm()}</Box>
      <Box sx={{ mt: 2 }}>
        {activeStep > 0 && (
          <Button onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 && (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default MultiStepForm;
