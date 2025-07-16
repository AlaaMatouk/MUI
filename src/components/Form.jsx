import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function Form() {
  return (
    <div>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <br />
        <Typography
          sx={{ color: "black", pb: "20px", textAlign: "center" }}
          variant="h4"
        >
          Contact Us
        </Typography>
        <TextField
          sx={{ width: "70%" }}
          id="standard-basic"
          label="Name"
          variant="standard"
        />
        <TextField
          sx={{ width: "70%" }}
          id="standard-basic"
          label="E-mail"
          variant="standard"
        />
        <TextField
          sx={{ width: "70%" }}
          id="standard-multiline-static"
          label="message"
          multiline
          rows={4}
          variant="standard"
        />
        <Button sx={{ background: "RebeccaPurple  " }} variant="contained">
          SUBMIT
        </Button>
      </Stack>
    </div>
  );
}
