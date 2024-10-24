import { Box } from "@mui/material";

const TypingEffect = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      fontSize: "2rem",
      color: "#050505",
      marginLeft: 1.5,
      marginBottom: 2.3,
    }}
  >
    <span className="dot">.</span>
    <span className="dot">.</span>
    <span className="dot">.</span>
    <style jsx>{`
      .dot {
        animation: wave 1s infinite;
        margin-bottom: 2px;
      }
      .dot:nth-child(1) {
        animation-delay: 0s;
      }
      .dot:nth-child(2) {
        animation-delay: 0.2s;
      }
      .dot:nth-child(3) {
        animation-delay: 0.4s;
      }
      @keyframes wave {
        0%,
        20%,
        100% {
          opacity: 0.2;
        }
        10% {
          opacity: 1;
        }
      }
    `}</style>
  </Box>
);

export default TypingEffect;
