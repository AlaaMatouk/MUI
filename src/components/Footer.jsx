import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#222",
        color: "white",
        py: 3,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" color="gray">
          &copy; {new Date().getFullYear()} omiga. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          <Link href="#" color="inherit" underline="hover">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" color="inherit" underline="hover">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
