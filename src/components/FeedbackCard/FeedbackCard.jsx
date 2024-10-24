import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "./../../App.css";
import { positiveFeedbackList } from "../../constants";
import CommentCard from "../FbComments/CommentCard";
import "./FeedbackCarousel.css"; 

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

        if (prev.length < 3 && prev.length < comments.length) {
          return [...prev, comments[prev.length]];
        } else if (prev.length >= 3) {
          const newComments = [
            ...prev.slice(1),
            comments[
              (comments.indexOf(prev[prev.length - 1]) + 1) % comments.length
            ],
          ];
          return newComments;
        }

        return prev;
      });
    }, 10000);

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <CommentCard
              comment={commentData}
              isTyping={
                visibleComments.length >= 2 &&
                index === visibleComments.length - 1
              }
              isLastComment={index === visibleComments.length - 1}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </Box>
  );
};

export default FeedbackCarousel;
