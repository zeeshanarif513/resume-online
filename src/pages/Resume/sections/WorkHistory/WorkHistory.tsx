// WorkHistory.tsx

import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { Work, WorkHistoryProps } from '../../../../types/pages/Home/Work';


const WorkHistory: React.FC<WorkHistoryProps> = ({ onAddWork }) => {
  const [open, setOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const work: Work = { jobTitle, companyName, startDate, endDate };
    onAddWork(work);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add Work
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Work</DialogTitle>
        <DialogContent>
        <Grid container spacing={2} marginTop={1}>
        <Grid item xs={12} md={12}>
          <TextField
            label="Job Title"
            variant="outlined"
            fullWidth
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Start Date"
            type="date"
            variant="outlined"
            fullWidth
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          </Grid>
          <Grid item xs={12} md={12}>
          <TextField
            label="End Date"
            type="date"
            variant="outlined"
            fullWidth
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WorkHistory;
