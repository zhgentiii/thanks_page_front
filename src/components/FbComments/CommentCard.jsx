import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Button,
  Popover,
  IconButton,
} from "@mui/material";

// Reaction emojis and corresponding text color styles
const emotionIcons = {
  like: { icon: "👍", text: "Like", color: "#1877f2" },
  heart: { icon: "❤️", text: "Love", color: "#f02849" },
  laugh: { icon: "😂", text: "Haha", color: "#f7b125" },
  wow: { icon: "😯", text: "Wow", color: "#f7b125" },
  sad: { icon: "😢", text: "Sad", color: "#f7b125" },
  angry: { icon: "😡", text: "Angry", color: "#f02849" },
};

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

const TypingEffect = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        color: "#050505",
      }}
    >
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
      <style jsx>{`
        .dot {
          animation: wave 1s infinite;
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
          0%, 20%, 100% {
            opacity: 0.2;
          }
          10% {
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

const CommentCard = ({ comment, isLastComment }) => {
  const {
    name,
    avatar,
    comment: message,
    time,
    emotions: initialEmotions,
  } = comment;

  const [anchorEl, setAnchorEl] = useState(null);
  const [reactions, setReactions] = useState(initialEmotions);
  const [currentReaction, setCurrentReaction] = useState(null);
  const [showComment, setShowComment] = useState(false);

  useEffect(() => {
    const savedReaction = localStorage.getItem(`reaction_${name}`);
    if (savedReaction) {
      setCurrentReaction(savedReaction);
    }

    // Show comment after a delay only for the last comment
    if (isLastComment) {
      const timer = setTimeout(() => {
        setShowComment(true);
      }, 2000); // 2 seconds for typing effect

      return () => clearTimeout(timer);
    } else {
      setShowComment(true); // Show immediately for other comments
    }
  }, [name, isLastComment]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const updateReaction = (newReaction) => {
    if (currentReaction === newReaction) {
      setCurrentReaction(null);
      const updatedReactions = reactions.map((reaction) =>
        reaction.emotion === newReaction
          ? { ...reaction, count: reaction.count - 1 }
          : reaction
      );
      setReactions(updatedReactions);
      localStorage.removeItem(`reaction_${name}`);
    } else {
      const updatedReactions = reactions.map((reaction) =>
        reaction.emotion === newReaction
          ? { ...reaction, count: reaction.count + 1 }
          : reaction
      );
      setCurrentReaction(newReaction);
      setReactions(updatedReactions);
      localStorage.setItem(`reaction_${name}`, newReaction);
    }
    handleClose();
  };

  const renderReactionButton = () => {
    const reaction = emotionIcons[currentReaction];
    if (!reaction) {
      return { text: "Like", color: "#65676b" };
    }

    return { text: reaction.text, color: reaction.color };
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f0f2f5",
        borderRadius: "8px",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          boxShadow: "none",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          position: "relative",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            gap: 1.5,
            padding: "8px 16px",
            alignItems: "flex-start",
          }}
        >
          <CardMedia
            component="img"
            src={avatar}
            alt={name}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginTop: "4px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f0f2f5",
              padding: "10px 14px",
              borderRadius: "18px",
              wordBreak: "break-word",
              flexGrow: 1,
              textAlign: "left",
              position: "relative",
            }}
          >
            <Link
              href="#"
              underline="none"
              sx={{ color: "#050505", fontWeight: "bold", fontSize: "0.95rem" }}
            >
              {name}
            </Link>
            {showComment ? (
              <Typography
                variant="body2"
                sx={{ color: "#050505", marginTop: "4px" }}
              >
                {message}
              </Typography>
            ) : (
              isLastComment && <TypingEffect />
            )}
            <ReactionSummary
              reactions={reactions}
              likesCount={reactions.reduce((acc, curr) => acc + curr.count, 0)}
            />
          </Box>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            paddingLeft: "75px",
            paddingTop: "3px",
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            size="small"
            sx={{
              color: renderReactionButton().color,
              fontSize: "0.8rem",
              textTransform: "none",
              padding: "0px 8px",
              minWidth: "auto",
            }}
            onClick={handleClick}
          >
            {renderReactionButton().text}
          </Button>
          <Typography
            variant="caption"
            sx={{ color: "#65676b", paddingLeft: "8px" }}
          >
            {time}
          </Typography>
        </Box>
      </Card>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ display: "flex", padding: "8px", gap: 1 }}>
          {Object.keys(emotionIcons).map((reaction) => (
            <IconButton key={reaction} onClick={() => updateReaction(reaction)}>
              {emotionIcons[reaction].icon}
            </IconButton>
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

export default CommentCard;
