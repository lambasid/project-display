import React from "react";
import { Typography, CardMedia } from "@mui/material";

function ProjectDetail({ project }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {project.title}
      </Typography>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ marginBottom: "10px" }}
      />
      <Typography variant="body1">
        {project.details}
      </Typography>
    </div>
  );
}

export default ProjectDetail;
