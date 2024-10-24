import { Box, Typography } from "@mui/material";
import { emotionIcons } from "../../../constants/index"

function ReactionSummary({ reactions, likesCount }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: 0,
        bottom: 0,
        transform: "translate(-2px, 30px)",
      }}
    >
      {reactions.slice(0, 3).map((reaction, index) => (
        <Box
          key={index}
          sx={{
            marginLeft: index === 0 ? 0 : "-8px",
            zIndex: reactions.length - index,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20px",
              height: "20px",
            }}
          >
            {emotionIcons[reaction.emotion].icon}
          </Box>
        </Box>
      ))}
      <Typography
        variant="body2"
        sx={{
          color: "#65676b",
          fontSize: "0.9rem",
          marginLeft: "4px",
        }}
      >
        {likesCount} Likes
      </Typography>
    </Box>
  );
}

export default ReactionSummary;
