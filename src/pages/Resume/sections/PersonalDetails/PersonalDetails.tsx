// PersonalDetailsSection.tsx
import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { PersonalDetailsDto, PersonalDetailsSectionProps } from '../../../../types/pages/Home/PersonalDetails';

const PersonalDetailsComponent: React.FC<PersonalDetailsSectionProps> = ({ onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    const details: PersonalDetailsDto = { name, email,phone,linkedin, address };
    onSave(details);
  };

    return (
<div>
<Grid container spacing={2}>
<Grid item xs={12} md={6}>
<TextField
  label="Name"
  variant="outlined"
  fullWidth
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
</Grid>
<Grid item xs={12} md={6}>
<TextField
  label="Email"
  variant="outlined"
  fullWidth
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
</Grid>
<Grid item xs={12} md={6}>
    <TextField
                label="Phone"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
</Grid>
<Grid item xs={12} md={6}>
<TextField
  label="LinkedIn"
  variant="outlined"
  fullWidth
  value={linkedin}
  onChange={(e) => setLinkedin(e.target.value)}
/>
</Grid>
<Grid item xs={12}>
<TextField
  label="Address"
  variant="outlined"
  fullWidth
  value={address}
  onChange={(e) => setAddress(e.target.value)}
/>
</Grid>
</Grid>
<Box mt={2}>
  <Button variant="contained" color="primary" onClick={handleSave}>
    Save
  </Button>
</Box>
</div>
      );
};

export default PersonalDetailsComponent;
