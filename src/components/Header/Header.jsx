import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "left",
      }}
    >
      <Typography variant="h5">Thank you for your order.</Typography>
      <Typography variant="h6">
        Our operator will contact you shortly to confirm the order.
      </Typography>
    </Box>
  );
}
