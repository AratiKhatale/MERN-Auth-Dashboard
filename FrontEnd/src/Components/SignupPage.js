import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    nationality: '',
    dob: '',
    gender: '',
    occupation: '',
    experience: '',
    website: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { name, email, password } = formData;
    const payload = { name, email, password };

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', payload);
      if (response.data.msg === 'User registered successfully') {
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.msg || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container"> 
      <Container maxWidth="sm" sx={{ mt: 4, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to ABC
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
          Where Financial Wisdom Meets Technology
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Mobile Number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Date of Birth (DD-MM-YYYY)" name="dob" value={formData.dob} onChange={handleChange} margin="normal" required />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Gender</InputLabel>
            <Select name="gender" value={formData.gender} onChange={handleChange}>
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Occupation</InputLabel>
            <Select name="occupation" value={formData.occupation} onChange={handleChange}>
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="business">Business</MenuItem>
            </Select>
          </FormControl>
          <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Re-enter Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} margin="normal" required />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, p: 1.5 }} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Create Account'}
          </Button>
          <Typography variant="body2" align="center" color="text.secondary">
            Already have an account? <a href="/login">Log in</a>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default SignUpForm;
