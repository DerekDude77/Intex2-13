import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./Components/Header";
import Blog from "./Blog";
import BurialSummary from "./BurialSummary";
const theme = createTheme();

const sections = [
  { title: "Home Page", url: "/" },
  { title: "Burial Summary", url: "/BurialSummary" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Blog" sections={sections} />
        </Container>
        <Router>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/Movies" element={<BurialSummary />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
