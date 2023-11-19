import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

export default function MDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Completion Date"
        maxDate={new Date()}
        // value={value}
        // onChange={(newValue) => {
        //   setValue(newValue);
        // }}
        fullWidth
        renderInput={(params) => <TextField {...params} fullWidth />}
        autoFocus={true} // <===========
      />
    </LocalizationProvider>
  );
}
