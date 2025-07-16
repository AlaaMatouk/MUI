import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "../components/Card";
import { Typography } from "@mui/material";

export default function GridCards() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography
        sx={{ color: "black", pb: "20px", textAlign: "center" }}
        variant="h4"
      >
        Our Candles
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        <Grid item xs={2} sm={4} md={4}>
          <ActionAreaCard />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <ActionAreaCard />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <ActionAreaCard />
        </Grid>
      </Grid>
    </Box>
  );
}
