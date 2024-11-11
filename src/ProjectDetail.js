// ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { Typography, CardMedia, Box, Link } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <Typography variant="h5">Project Not Found</Typography>;
  }

  return (
    <Box sx={{ padding: "30px", textAlign: "center", maxWidth: "1200px", margin: "auto" }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#a31a1e",
          letterSpacing: "1.5px",
          marginBottom: "1px"
        }}
      >
        {project.title}
      </Typography>

      <Link
        href="https://youtu.be/guKOV3laBH8?si=7vYV7hqPUNxqHZVc"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ position: "relative", display: "inline-block", marginTop: "20px", textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          image="https://img.youtube.com/vi/guKOV3laBH8/hqdefault.jpg"
          alt="Watch Daily Wellness App Demo"
          sx={{
            width: "800px",
            maxWidth: "1200px",
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            position: "relative"
          }}
        />
        {/* Play Button Icon */}
        <PlayCircleOutlineIcon
          sx={{
            fontSize: "60px",
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.8
          }}
        />
        </Link>
      <Typography variant="body1" padding="20px" paragraph>
        The <strong>Daily Wellness App</strong> is a comprehensive platform designed to improve users' mental and physical well-being through personalized features. It includes daily wellness check-ins, goal-setting tools, and habit-tracking functionality to foster healthy routines. Users can monitor their mental health, track progress over time, and receive tailored recommendations based on their activities and wellness status. The app also incorporates reminders for daily activities like hydration, exercise, and mindfulness to help users stay consistent. Built with an intuitive and user-friendly interface, it ensures a seamless experience, promoting long-term engagement.
      </Typography>
      
    </Box>
  );
}

export default ProjectDetail;
