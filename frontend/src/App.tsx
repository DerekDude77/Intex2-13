import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./Components/Header";
import Blog from "./Blog";
import BurialSummary from "./BurialSummary";
const theme = createTheme({
  palette: {
    background: {
      default: "#3d424b",
    },
    text: {
      primary: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Adler",
    h4: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1.1rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          fontFamily: "Adler",
          padding: "1rem",
          backgroundColor: "#2c3139",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Adler",
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "0.3s",
          fontFamily: "Adler",
          "&:hover": {
            transform: "scale(1.02)",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: "0.5rem",
        },
      },
    },
  },
});

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
