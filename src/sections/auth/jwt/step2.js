import React from 'react';
import { TextField, Box } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes

const Step2 = ({ formData, handleChange }) => (
  <Box sx={{ padding: '16px' }}>
    <TextField
      label="Field 3"
      name="field3"
      value={formData.field3}
      onChange={handleChange}
      fullWidth
      sx={{ marginBottom: '16px' }}
    />
    <TextField
      label="Field 4"
      name="field4"
      value={formData.field4}
      onChange={handleChange}
      fullWidth
    />
  </Box>
);

// Define prop types
Step2.propTypes = {
  formData: PropTypes.shape({
    field3: PropTypes.string,
    field4: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Step2;
