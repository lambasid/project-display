// ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { Typography, CardMedia, Box, Link } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <Typography variant="h5" sx={{ textAlign: "center", marginTop: "20px" }}>Project Not Found</Typography>;
  }

  return (
    <Box sx={{ padding: "50px 10px", textAlign: "center", maxWidth: "800px", margin: "auto" }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#a31a1e",
          letterSpacing: "1.5px",
          marginBottom: "20px"
        }}
      >
        {project.title}
      </Typography>

      {/* Conditional Descriptions and Links */}
      {project.title === "WaterCooler" ? (
        <>
          <Typography variant="body1" padding="20px" paragraph>
            <strong>WaterCooler</strong> is a mobile app designed for residents in apartment buildings and other shared residences. It provides seamless, phone-based access to rooms, allowing residents to enter easily without physical keys. Beyond access, WaterCooler fosters a sense of community by enabling residents to connect and make friends within their building.
          </Typography>
          <Link
            href="https://www.figma.com/proto/Uoz35kKfV0me26rEX1Qr6V/Watercooler?page-id=0%3A1&node-id=1-14&node-type=frame&viewport=264%2C433%2C0.18&t=496eIn85Xhm9wnr7-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A14"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "inline-block", marginTop: "20px", textDecoration: "none", color: "#004c8c" }}
          >
            View WaterCooler Design on Figma
          </Link>
        </>
      ) : project.title === "Meal Hub" ? (
        <>
          <Typography variant="body1" padding="20px" paragraph>
            <strong>MealHub</strong> is a hackathon web app that creates personalized meal plans tailored to users' dietary preferences, favorite cuisines, and available cooking days. Users simply input their restrictions and schedules, and MealHub generates a complete weekly meal plan along with a shopping list to ensure accurate ingredient quantities.
          </Typography>
          <Typography variant="body1" padding="20px" paragraph>
            MealHub provides the flexibility to accept its suggestions as-is or customize them by swapping meals, adding new ones, or generating a completely randomized plan. Users can also save their favorite recipes for future reference, ensuring they always have access to meals they loved.
          </Typography>
          <Link
            href="https://devpost.com/software/mealhub"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "inline-block", marginTop: "20px", textDecoration: "none", color: "#004c8c" }}
          >
            View MealHub on Devpost
          </Link>
        </>
      ) : project.title === "Eat Real" ? (
        <>
          <Typography variant="body1" padding="20px" paragraph>
            <strong>Eat Real</strong> is a non-profit organization dedicated to promoting sustainable food practices and healthy eating. They work with schools, companies, and communities to make healthy, affordable food more accessible and to educate people on sustainable food choices.
          </Typography>
          <Link
            href="https://eatreal.org"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "inline-block", marginTop: "20px", textDecoration: "none", color: "#004c8c" }}
          >
            Learn More About Eat Real
          </Link>
        </>
      ) : null}

      {/* Video Thumbnail Example (optional, only if applicable) */}
      <Link
        href="https://youtu.be/guKOV3laBH8?si=7vYV7hqPUNxqHZVc" // Example link; replace if needed
        target="_blank"
        rel="noopener noreferrer"
        sx={{ position: "relative", display: "inline-block", marginTop: "20px", textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          image="https://img.youtube.com/vi/guKOV3laBH8/hqdefault.jpg" // Replace with actual thumbnail if needed
          alt={`Watch ${project.title} Demo`}
          sx={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            cursor: "pointer"
          }}
        />
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
    </Box>
  );
}

export default ProjectDetail;
