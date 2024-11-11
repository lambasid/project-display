import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia, Container } from "@mui/material";
import ProjectDetail from "./ProjectDetail";
import capstoneImage from "./assets/capstone_wellness.jpg";
import mealhubImage from "./assets/mealhub.jpg";
import tdRewardsImage from "./assets/td_rewards.jpg";
import littleLemonImage from "./assets/little_lemon.jpg";
import "./App.css";

// Project data with updated details and correct descriptions
const projects = [
  { 
    id: 1, 
    title: "Daily Wellness App", 
    description: "A wellness platform focused on anger management and well-being.", 
    details: "A comprehensive wellness platform that integrates personalized wellness recommendations, user progress tracking, and engaging activities.", 
    image: capstoneImage 
  },
  { 
    id: 2, 
    title: "WaterCooler App", 
    description: "An app for connecting residents in shared residences.", 
    details: "WaterCooler is a mobile app designed for residents in apartment buildings, providing seamless access to rooms and fostering community connections.", 
    image: mealhubImage 
  },
  { 
    id: 3, 
    title: "Meal Hub", 
    description: "An app for creating personalized meal plans.", 
    details: "MealHub generates customized weekly meal plans and shopping lists based on dietary preferences, allowing users to organize meals efficiently.", 
    image: tdRewardsImage 
  },
  { 
    id: 4, 
    title: "Eat Real App", 
    description: "A non-profit initiative promoting balanced diets and sustainable food choices.", 
    details: "Eat Real partners with schools, communities, and organizations to promote healthy, balanced diets for both adults and children. They focus on sustainable food practices, making nutritious food accessible and educating communities on healthy eating.", 
    image: littleLemonImage 
  }
];

function App() {
  return (
    <Router>
      <ConditionalHeader />
      <Routes>
        {/* Home Route showing the project list */}
        <Route path="/" element={<ProjectList />} />
        {/* Project Detail Route */}
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

// Component displaying the list of projects as clickable cards
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
