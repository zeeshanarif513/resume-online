// AchievementsHistory.tsx

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

interface Achievement {
  title: string;
  description: string;
}

interface AchievementsHistoryProps {
  onAddAchievement: (achievement: Achievement) => void;
}

const AchievementsHistory: React.FC<AchievementsHistoryProps> = ({
  onAddAchievement,
}) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const achievement: Achievement = { title, description };
    onAddAchievement(achievement);
    setOpen(false);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add Achievement
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Achievement</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={12} md={12}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary"  disabled={!title || !description}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AchievementsHistory;
