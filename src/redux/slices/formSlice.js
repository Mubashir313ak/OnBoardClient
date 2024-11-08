// src/features/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: {
      country: '',
      email: '',
      userType: '',
      // Add other fields for later steps
    },
    activeStep: 0,
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    nextStep: (state) => {
      state.activeStep += 1;
    },
    prevStep: (state) => {
      state.activeStep -= 1;
    },
  },
});

export const { updateFormData, nextStep, prevStep } = formSlice.actions;
export default formSlice.reducer;
