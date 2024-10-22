import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function PersonInfoCard() {
  return (
    <Card
      sx={{
        width: "100%",
        height: "280px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", m: 4, gap: 3 }}>
          <PersonIcon />
          <Typography variant="subtitle1">PersonName</Typography>
        </Box>
        <Box sx={{ display: "flex", m: 4, gap: 3 }}>
          <LocalPhoneIcon />
          <Typography variant="subtitle1">person phone number</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
