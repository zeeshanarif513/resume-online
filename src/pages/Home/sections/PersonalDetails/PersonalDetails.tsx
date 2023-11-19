// PersonalDetailsSection.tsx
import React from 'react';
import { Grid, TextField } from '@mui/material';

const PersonalDetails: React.FC<PersonalDetailsSectionProps> = ({ details, onChange }) => {
    return (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                fullWidth
                value={details.name}
                onChange={(e) => onChange('name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                fullWidth
                value={details.email}
                onChange={(e) => onChange('email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone"
                fullWidth
                value={details.phone}
                onChange={(e) => onChange('phone', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="LinkedIn"
                fullWidth
                value={details.linkedin}
                onChange={(e) => onChange('linkedin', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                fullWidth
                value={details.address}
                onChange={(e) => onChange('address', e.target.value)}
              />
            </Grid>
          </Grid>
      );
};

export default PersonalDetails;
