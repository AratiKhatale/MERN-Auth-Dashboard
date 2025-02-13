// import React from "react";
// import { AppBar, Toolbar, Button, Typography, Container, Grid, Card, CardContent, Avatar } from "@mui/material";
// import { CheckCircle, TrendingUp, Security, Insights, Person, BarChart, Group } from "@mui/icons-material";

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <AppBar position="static" className="navbar">
//         <Toolbar>
//           <Typography variant="h6" className="logo">
//             ABC
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <Container className="hero-section">
//         <Typography variant="h4" className="hero-heading">
//           Hello, <br />
//           Unlock Your <span className="highlight">Investor Persona</span> and Discover
//           <span className="highlight"> Tailored Investment Insights</span> with ABC
//         </Typography>

//         <ul className="features-list">
//           <li><CheckCircle /> Know your risk-taking appetite</li>
//           <li><CheckCircle /> Receive data and insights for informed decisions</li>
//           <li><CheckCircle /> Tailored investment recommendations based on your goals</li>
//           <li><CheckCircle /> Up-to-date market trends to guide investment strategies</li>
//         </ul>

//         <Button variant="contained" color="primary" className="start-btn">
//           Start Assessment
//         </Button>
//       </Container>

//       {/* Steps Section */}
//       <Container className="steps-section">
//         <Grid container spacing={3} justifyContent="center">
//           {[
//             { step: "Step 1", title: "Complete the Assessment", icon: <Person />, desc: "Be yourself and answer honestly to find out your investor persona" },
//             { step: "Step 2", title: "View Detailed Results", icon: <Insights />, desc: "Learn how your personality type influences your financial decisions" },
//             { step: "Step 3", title: "Unlock Investment Suggestions", icon: <TrendingUp />, desc: "Grow your wealth with our tailor-made investment suggestions" }
//           ].map((item, index) => (
//             <Grid item xs={12} sm={4} key={index}>
//               <Card className="step-card">
//                 <CardContent>
//                   <Avatar className="step-icon">{item.icon}</Avatar>
//                   <Typography variant="h6" className="step-title">{item.step}</Typography>
//                   <Typography variant="body1" className="step-text">{item.title}</Typography>
//                   <Typography variant="body2" className="step-desc">{item.desc}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Features Section */}
//       <Container className="features-container">
//         <Typography variant="h5" className="features-title">What Can ABC Do For You</Typography>
//         <Grid container spacing={3}>
//           {[
//             { title: "AI Investment Insights", icon: <BarChart />, desc: "Data-driven insights helping you make informed investment decisions." },
//             { title: "Enhanced Decision-Making", icon: <Security />, desc: "Anticipate investment preferences to provide better guidance." },
//             { title: "Better Risk Management", icon: <TrendingUp />, desc: "Customize strategies to match the person’s risk tolerance." },
//             { title: "Targeted Strategies", icon: <Insights />, desc: "Customize recommendations to fit each investor's needs." },
//             { title: "Personalized Experience", icon: <Person />, desc: "Providing personalized investment experience for better satisfaction." },
//             { title: "Scalability", icon: <Group />, desc: "Scale solutions to efficiently grow and manage diverse portfolios." }
//           ].map((feature, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card className="feature-card">
//                 <CardContent>
//                   <Avatar className="feature-icon">{feature.icon}</Avatar>
//                   <Typography variant="h6" className="feature-title">{feature.title}</Typography>
//                   <Typography variant="body2" className="feature-desc">{feature.desc}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default HomePage;