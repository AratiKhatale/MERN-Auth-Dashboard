import React from "react";
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Container, Grid, Paper, Avatar } from "@mui/material";
import { Home, BarChart, AccountCircle, Settings } from "@mui/icons-material";
import Sidebar from "./Sidebar";

const Navbar = () => (
  <AppBar position="static" sx={{ bgcolor: "white", color: "black", p: 1 }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>ABC</Typography>
      <Avatar alt="User" src="/user-avatar.png" sx={{ marginRight: 1 }} />
      <Typography variant="body1">Arati Khatale</Typography>
    </Toolbar>
  </AppBar>
);

const HeroSection = () => (
  <Container sx={{ textAlign: "center", py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Unlock Your Investor Persona
    </Typography>
    <Typography variant="body1" paragraph>
      Discover Tailored Investment Insights with ABC
    </Typography>
    <Button variant="contained" color="primary" size="large">
      Start Assessment
    </Button>
  </Container>
);

const StepsSection = () => (
  <Container sx={{ py: 4 }}>
    <Grid container spacing={3}>
      {["Complete the Assessment", "View Detailed Results", "Unlock Investment Suggestions"].map((step, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Step {index + 1}</Typography>
            <Typography variant="body2">{step}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

const BenefitsSection = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h5" gutterBottom textAlign="center">
      What Can ABC Do For You
    </Typography>
    <Grid container spacing={3}>
      {["AI Investment Insights", "Better Risk Management", "Personalized Experience", "Enhanced Decision-Making", "Targeted Strategies", "Scalability"].map((benefit, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="body1">{benefit}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

const HomePage = () => (
  <Box sx={{ display: "flex" }}>
    <Sidebar />
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Navbar />
      <HeroSection />
      <StepsSection />
      <BenefitsSection />
    </Box>
  </Box>
);

export default HomePage;
