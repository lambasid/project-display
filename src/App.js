import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Box, Modal, CardMedia } from "@mui/material";
import ProjectDetail from "./ProjectDetail";
import capstoneImage from "./assets/capstone_wellness.jpg";
import mealhubImage from "./assets/mealhub.jpg";
import tdRewardsImage from "./assets/td_rewards.jpg";
import littleLemonImage from "./assets/little_lemon.jpg";
import "./App.css";

const projects = [
  {
    title: "Capstone Daily Wellness App",
    description: "A wellness platform focused on user engagement and well-being.",
    details: "A comprehensive wellness platform that integrates personalized wellness recommendations, user progress tracking, and engaging activities.",
    image: capstoneImage
  },
  {
    title: "MealHub App",
    description: "A meal planning and recipe discovery app.",
    details: "MealHub is designed for users to explore new recipes, plan weekly meals, and organize ingredients efficiently.",
    image: mealhubImage
  },
  {
    title: "TD Mobile Rewards Page",
    description: "Intuitive rewards experience for TD mobile users.",
    details: "A redesigned rewards page focusing on enhancing customer engagement with interactive and seamless reward features.",
    image: tdRewardsImage
  },
  {
    title: "Little Lemon Food Ordering App",
    description: "An iOS app for a seamless food ordering experience.",
    details: "Built using SwiftUI, this app allows users to order food easily, featuring an intuitive UI and efficient data management.",
    image: littleLemonImage
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4" gutterBottom>
          My Projects
        </Typography>
        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {projects.map((project, index) => (
            <Card key={index} sx={{ width: "300px", margin: "10px" }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Button onClick={() => handleOpen(project)} variant="outlined" sx={{ marginTop: "10px" }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Modal open={Boolean(selectedProject)} onClose={handleClose}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", p: 4 }}>
            {selectedProject && <ProjectDetail project={selectedProject} />}
            <Button onClick={handleClose} sx={{ marginTop: "10px" }}>Close</Button>
          </Box>
        </Modal>
      </header>
    </div>
  );
}

export default App;
