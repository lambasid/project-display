import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia, Container } from "@mui/material";
import ProjectDetail from "./ProjectDetail";
import capstoneImage from "./assets/capstone_wellness.jpg";
import mealhubImage from "./assets/mealhub.jpg";
import tdRewardsImage from "./assets/td_rewards.jpg";
import littleLemonImage from "./assets/little_lemon.jpg";
import "./App.css";

const projects = [
  { id: 1, title: "Daily Wellness App", description: "A wellness platform focused on anger management and well-being.", details: "A comprehensive wellness platform that integrates personalized wellness recommendations, user progress tracking, and engaging activities.", image: capstoneImage },
  { id: 2, title: "WaterCooler App", description: "An app for finding and hosting events.", details: "MealHub is designed for users to explore new recipes, plan weekly meals, and organize ingredients efficiently.", image: mealhubImage },
  { id: 3, title: "Food-Hub", description: "Intuitive rewards experience for TD mobile users.", details: "A redesigned rewards page focusing on enhancing customer engagement with interactive and seamless reward features.", image: tdRewardsImage },
  { id: 4, title: "Little Lemon Food Ordering App", description: "An iOS app for a seamless food ordering experience.", details: "Built using SwiftUI, this app allows users to order food easily, featuring an intuitive UI and efficient data management.", image: littleLemonImage }
];

function App() {
  return (
    <Router>
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
      <footer className="footer">
        <Typography variant="body2">
          © {new Date().getFullYear()} Navya Vohra - All Rights Reserved
        </Typography>
      </footer>
    </Router>
  );
}

// This component renders the header only on the main page
function ConditionalHeader() {
  const location = useLocation();
  return location.pathname === "/" ? (
    <header className="App-header">
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: "#a31a1e",
          letterSpacing: "1.5px",
          
        }}
      >
        Navya Vohra's Portfolio | Projects & Designs
      </Typography>
    </header>
  ) : null;
}

function ProjectList() {
  return (
    <Container className="portfolio-container">
      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id} className="card-link">
          <Card sx={{ width: "400px", cursor: "pointer", boxShadow: 4, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="500"
              image={project.image}
              alt={project.title}
            />
            <CardContent className="card-content">
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Container>
  );
}

export default App;
