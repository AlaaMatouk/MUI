import React from "react";
import { Container, Grid, Typography, Button, Stack } from "@mui/material";
import bg from "../assets/imgs/bg.jpg";
function HeroSection() {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: `url(${bg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        background: "Indigo  ",
        padding: "40px",

        mb: "20px",
      }}
    >
      <Typography
        sx={{ color: "white" }}
        variant="h4"
        component="h4"
        gutterBottom
      >
        Welcome To Our Candles Shop
      </Typography>
      <Typography sx={{ color: "white" }} variant="h6">
        A Hug In A Cup
      </Typography>
      <Button
        sx={{ background: "RebeccaPurple  ", color: "white" }}
        variant="contained"
        size="large"
      >
        View Candles
      </Button>
    </Stack>
  );
}

export default HeroSection;
