// PersonalDetailsSection.tsx
import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { PersonalDetailsDto, PersonalDetailsSectionProps } from '../../../../types/pages/Home/PersonalDetails';

const PersonalDetailsComponent: React.FC<PersonalDetailsSectionProps> = ({ onSave, personalInfo, isEditMode }) => {
  const [name, setName] = useState(personalInfo?.name ? personalInfo.name :  '');
  const [email, setEmail] = useState(personalInfo?.email ? personalInfo.email :  '');
  const [phone, setPhone] = useState(personalInfo?.phone ? personalInfo.phone :  '');
  const [linkedin, setLinkedin] = useState(personalInfo?.linkedin ? personalInfo.linkedin :  '');
  const [address, setAddress] = useState(personalInfo?.address ? personalInfo.address :  '');

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
  <Button variant="contained" color="primary" onClick={handleSave} disabled={!name || !email || !phone || !linkedin || !address}>
   {isEditMode ? 'Update' : 'Save'} 
  </Button>
</Box>
</div>
      );
};

export default PersonalDetailsComponent;
