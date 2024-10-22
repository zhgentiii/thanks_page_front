import React from "react";
import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import { attentionListOfConditions } from "../../constants/index";
import CheckIcon from "@mui/icons-material/Check";

export default function AttentionCard() {
  return (
    <Card
      sx={{
        width: "100%", // Use full width on mobile
        padding: { xs: 2, md: 3 },
        borderRadius: "20px",
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "20px", md: "24px" },
              textAlign: "center",
              color: "black",
            }}
          >
            Attention
          </Typography>
        }
      />
      <CardContent>
        {attentionListOfConditions.map((attention, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
            }}
          >
            <CheckIcon sx={{ color: "green", mr: 1 }} />
            <Typography>{attention.text}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
