// src/components/forms/JwtRegisterView.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { updateFormData } from 'src/redux/slices/formSlice';

const JwtRegisterView = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  return (
    <form>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Country</InputLabel>
        <Select name="country" value={formData.country} onChange={handleChange} label="Country">
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Pakistan">Pakistan</MenuItem>
          <MenuItem value="India">India</MenuItem>
          {/* Add more countries as needed */}
        </Select>
      </FormControl>
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
    </form>
  );
};

export default JwtRegisterView;
