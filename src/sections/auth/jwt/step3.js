import React from 'react';
import { TextField, Box } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes

const Step3 = ({ formData, handleChange }) => (
  <Box sx={{ padding: '16px' }}>
    <TextField
      label="Field 5"
      name="field5"
      value={formData.field5}
      onChange={handleChange}
      fullWidth
    />
  </Box>
);

// Define prop types
Step3.propTypes = {
  formData: PropTypes.shape({
    field5: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Step3;
