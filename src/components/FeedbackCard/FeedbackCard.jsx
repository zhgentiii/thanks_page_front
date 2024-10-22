import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Box, Link } from "@mui/material";
import { positiveFeedbackList } from "../../constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: 2, md: 3 },
        textAlign: "center",
        mb: 2,
      }}
    >
      <Slider {...settings}>
        {positiveFeedbackList.map((feedbackItem, index) => (
          <div key={index}>
            <Card
              sx={{
                backgroundColor: "#E9F3FB",
                borderRadius: "20px",
                boxShadow: 3,
                padding: { xs: 2, md: 3 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>
                  {feedbackItem.feedback}
                </Typography>
                <Link
                  href={feedbackItem.facebookProfileLink}
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
                    <Typography variant="body2">View Profile</Typography>
                  </Box>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default FeedbackCarousel;
