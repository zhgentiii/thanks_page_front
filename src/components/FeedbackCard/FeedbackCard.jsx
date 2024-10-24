import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion"; // Import necessary Framer Motion components
import "./../../App.css";
import { positiveFeedbackList } from "../../constants";
import CommentCard from "../FbComments/CommentCard";
import "./FeedbackCarousel.css"; // Import your CSS file for custom styles

const FeedbackCarousel = () => {
  const [comments, setComments] = useState(positiveFeedbackList);
  const [visibleComments, setVisibleComments] = useState([]);

  useEffect(() => {
    // Initialize with the first 3 comments
    setVisibleComments(comments.slice(0, 3));

    // Start the interval to manage comments
    const interval = setInterval(() => {
      setVisibleComments((prev) => {
        if (comments.length === 0) return [];

        // If we have less than 3 visible comments, add more
        if (prev.length < 3 && prev.length < comments.length) {
          return [...prev, comments[prev.length]];
        } else if (prev.length >= 3) {
          // Remove the first comment (left) and add the next comment
          const newComments = [
            ...prev.slice(1),
            comments[
              (comments.indexOf(prev[prev.length - 1]) + 1) % comments.length
            ],
          ];
          return newComments; // Shift left and add new comment
        }

        return prev; // Return the current visible comments if no changes
      });
    }, 3000); // Adjust the time interval as needed

    return () => clearInterval(interval);
  }, [comments]);

  return (
    <Box
      sx={{
        width: "90%",
        padding: { xs: 2, md: 3 },
        textAlign: "center",
        height: "55%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {visibleComments.map((commentData, index) => (
          <motion.div
            key={commentData.name}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
          >
            <CommentCard
              comment={commentData}
              isTyping={
                visibleComments.length >= 3 &&
                index === visibleComments.length - 1
              } // Typing effect on the last comment if there are 3 or more comments
              isLastComment={index === visibleComments.length - 1} // To determine if it's the last comment
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </Box>
  );
};

export default FeedbackCarousel;
