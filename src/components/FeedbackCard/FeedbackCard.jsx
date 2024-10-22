import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { positiveFeedbackList } from "../../constants"; // Mock feedback list
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../App.css";

const FeedbackCarousel = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "John Doe",
      feedback: "Great website",
      facebookProfileLink: "https://facebook.com",
    },
    {
      name: "Jane Smith",
      feedback: "Love it",
      facebookProfileLink: "https://facebook.com",
    },
    {
      name: "Alex Brown",
      feedback: "Best experience ever",
      facebookProfileLink: "https://facebook.com",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTyping, setIsTyping] = useState(false);
  const [nextFeedback, setNextFeedback] = useState(feedbacks[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newFeedback =
        positiveFeedbackList[currentIndex % positiveFeedbackList.length];
      setNextFeedback(newFeedback);
      setIsTyping(true);

      setTimeout(() => {
        setFeedbacks((prevFeedbacks) => [
          newFeedback,
          prevFeedbacks[0],
          prevFeedbacks[1],
        ]);
        setCurrentIndex((prev) => prev + 1);
        setIsTyping(false);
      }, 2000);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Box
      sx={{
        width: "90%",
        padding: { xs: 2, md: 3 },
        textAlign: "center",
        height: "55%", // Use full height
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "100%",
        }}
      >
        {/* Feedback cards */}
        {feedbacks.map((feedback, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#E9F3FB",
              borderRadius: "20px",
              boxShadow: 3,
              padding: { xs: 2, md: 3 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 150,
              opacity: index === 0 ? (isTyping ? 0.5 : 1) : 1, // Adjust opacity for typing feedback
            }}
          >
            <CardContent>
              {index === 0 && isTyping ? (
                <div>
                  <Typography
                    variant="body2"
                    sx={{ marginBottom: 1, color: "#6CAD96" }}
                  >
                    {nextFeedback.name} is typing...
                  </Typography>
                  <div className="chat-bubble">
                    <div className="typing">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    {feedback.feedback}
                  </Typography>
                  <Link
                    href={feedback.facebookProfileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#3b5998",
                      }}
                    >
                      <FacebookIcon sx={{ marginRight: 1 }} />
                      <Typography variant="body2">{feedback.name}</Typography>
                    </Box>
                  </Link>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeedbackCarousel;
