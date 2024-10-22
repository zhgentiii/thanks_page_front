import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import InfoCard from "./components/InfoCard/InfoCard";
import PersonInfoCard from "./components/PersonInfoCard/PersonInfoCard";
import FeedbackCarousel from "./components/FeedbackCard/FeedbackCard";

function App() {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(145deg, hsl(0deg 0% 100%) 0%, hsl(83deg 58% 93%) 22%, hsl(83deg 58% 86%) 44%, hsl(83deg 57% 80%) 64%, hsl(83deg 56% 74%) 79%, hsl(83deg 55% 68%) 90%, hsl(83deg 54% 62%) 96%, hsl(83deg 53% 56%) 99%, hsl(83deg 52% 51%) 100%, hsl(83deg 60% 46%) 101%, hsl(83deg 72% 41%) 100%)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pl: { xs: 2, md: 10 },
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ height: "900px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "15px",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#7AB51E",
              textAlign: "left",
              width: "100%",
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            Thank you for your order.
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              width: "100%",
              fontSize: { xs: "18px", md: "28px" },
              fontWeight: 300,
              mt: { xs: 1, md: 2 },
            }}
          >
            Our operator will contact you shortly to confirm the order.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            width: "100%",
            mt: { xs: 4, md: 10 },
            // p: { xs: 2, md: 3 },
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: "30%" },
              height: { xs: "auto", md: "420px" },
              mx: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PersonInfoCard />
          </Box>
          <Box
            sx={{
              width: { xs: "90%", md: "30%" },
              height: { xs: "auto", md: "420px" },
              mx: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FeedbackCarousel />
          </Box>
          <Box
            sx={{
              width: { xs: "90%", md: "30%" },
              height: { xs: "auto", md: "420px" },
              mx: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InfoCard />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <Box sx={{ width: "220px", textAlign: "right" }}>
            <Typography>Call center hours: 09:30-20:00</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
