import React from 'react';
import { Grid, TextField, Button, TextFieldProps } from '@mui/material';

import { MDatePicker } from '../../../../components/MDatePicker';

import './styles.css'

const EducationSection: React.FC<EducationSectionProps> = ({ education, onAddEducation, onChange }) => {
    return (
        <div className="section">
          <h3 className="section-title">Education</h3>
  
          {education.map((educationDetails, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Degree"
                  fullWidth
                  value={educationDetails.degree}
                  onChange={(e) => onChange(index, 'degree', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MDatePicker />
              </Grid>
            </Grid>
          ))}
  
          <Button variant="outlined" color="primary" onClick={onAddEducation}>
            Add Education
          </Button>
        </div>
    );
  };
  
  export default EducationSection;