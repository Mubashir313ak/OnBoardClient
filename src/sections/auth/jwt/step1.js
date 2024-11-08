// src/components/forms/UserTypeForm.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { updateFormData } from 'src/redux/slices/formSlice';

const UserTypeForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const handleChange = (e) => {
    dispatch(updateFormData({ userType: e.target.value }));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">User Type</FormLabel>
      <RadioGroup name="userType" value={formData.userType} onChange={handleChange}>
        <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
        <FormControlLabel value="User" control={<Radio />} label="User" />
      </RadioGroup>
    </FormControl>
  );
};

export default UserTypeForm;
