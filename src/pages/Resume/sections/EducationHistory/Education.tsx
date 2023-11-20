// EducationHistory.tsx

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { Education } from "../../../../types/pages/Home/Education";

interface EducationHistoryProps {
  onAddEducation: (education: Education) => void;
}

const EducationHistory: React.FC<EducationHistoryProps> = ({
  onAddEducation,
}) => {
  const [open, setOpen] = useState(false);
  const [degree, setDegree] = useState("");
  const [completionDate, setCompletionDate] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const education: Education = { degree, completionDate };
    onAddEducation(education);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add Education
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Education</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={12} md={12}>
              <TextField
                label="Degree"
                variant="outlined"
                fullWidth
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="Completion Date"
                type="date"
                variant="outlined"
                fullWidth
                value={completionDate}
                onChange={(e) => setCompletionDate(e.target.value)}
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

export default EducationHistory;
