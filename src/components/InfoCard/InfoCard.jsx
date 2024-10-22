import React from "react";
import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import { attentionListOfConditions } from "../../constants/index";
import CheckIcon from "@mui/icons-material/Check";

export default function AttentionCard() {
  return (
    <Card
      sx={{
        width: "100%",
        height: "280px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
        sx={{ textAlign: "center", mb: 1 }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
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
