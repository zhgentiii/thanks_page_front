import { Box, Container } from "@mui/material";
import InfoCard from "./components/InfoCard/InfoCard";
import PersonInfoCard from "./components/PersonInfoCard/PersonInfoCard";
import FeedbackCarousel from "./components/FeedbackCard/FeedbackCard";
import Header from "./components/Header/Header";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        overflow: { xs: "auto", md: "hidden" },
        backgroundImage:
          "linear-gradient(145deg, hsl(0deg 0% 100%) 0%, hsl(83deg 58% 93%) 22%, hsl(83deg 58% 86%) 44%, hsl(83deg 57% 80%) 64%, hsl(83deg 56% 74%) 79%, hsl(83deg 55% 68%) 90%, hsl(83deg 54% 62%) 96%, hsl(83deg 53% 56%) 99%, hsl(83deg 52% 51%) 100%, hsl(83deg 60% 46%) 101%, hsl(83deg 72% 41%) 100%)",
      }}
    >
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Header />
        </Box>

        <Box
          sx={{
            display: { xs: "column", md: "flex" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            marginTop: "30px"
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "28%" },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <PersonInfoCard />
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                width: "100%",
                mb: 3,
              }}
            >
              <FeedbackCarousel />
            </Box>
            <InfoCard />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FeedbackCarousel />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
