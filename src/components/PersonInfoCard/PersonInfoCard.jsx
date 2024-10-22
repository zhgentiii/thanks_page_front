import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function PersonInfoCard() {
  return (
    <Card
      sx={{
        width: "100%",
        padding: { xs: 2, md: 3 },
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", m: 3, gap: 3 }}>
          <PersonIcon />
          <Typography variant="subtitle2">PersonName</Typography>
        </Box>
        <Box sx={{ display: "flex", m: 3, gap: 3 }}>
          <LocalPhoneIcon />
          <Typography variant="subtitle2">person phone number</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
