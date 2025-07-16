import { Box, Card, CardMedia, Stack } from "@mui/material";
import React from "react";
import candle1 from "../assets/imgs/candle1.png";
export default function Aboutus() {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "30px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "35%", mr: "20px", borderRadius: "20px" }}
        image={candle1}
        alt="Live from space album cover"
      />
      <Box sx={{ width: "20%", flex: 1, alignSelf: "center" }}>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          a. Harum aut quas optio. Ipsam nihil eveniet omnis, impedit nisi,
          itaque vel praesentium voluptatum doloremque voluptas iste sequi
          labore fugit.
        </p>
      </Box>
    </Card>
  );
}
