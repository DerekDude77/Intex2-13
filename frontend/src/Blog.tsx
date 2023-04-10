// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Header from "./Components/Header";
// import MainFeaturedPost from "./Components/MainFeaturedPost";
// import FeaturedPost from "./Components/FeaturedPost";
// import Main from "./Components/Main";
// import Sidebar from "./Components/Sidebar";
// import Footer from "./Components/Footer";
// import Sarco from "./Sarcophagus.jpg";
// // import post1 from "./blog-post.1.md";
// // import post2 from "./blog-post.2.md";
// // import post3 from "./blog-post.3.md";

// const sections = [
//   { title: "Technology", url: "#" },
//   { title: "Design", url: "#" },
//   { title: "Culture", url: "#" },
//   { title: "Business", url: "#" },
//   { title: "Politics", url: "#" },
//   { title: "Opinion", url: "#" },
//   { title: "Science", url: "#" },
//   { title: "Health", url: "#" },
//   { title: "Style", url: "#" },
//   { title: "Travel", url: "#" },
// ];

// const mainFeaturedPost = {
//   title: "Fag El-Gamous",
//   description:
//     "Discover the mysteries of Fag El-Gamous, an ancient burial site unveiling the secrets of a forgotten civilization.",
//   image: Sarco,
//   imageText: "main image description",
//   linkText: "Continue reading…",
// };

// const featuredPosts = [
//   {
//     title: "Featured post",
//     date: "Nov 12",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: Sarco,
//     imageLabel: "Image Text",
//   },
//   {
//     title: "Post title",
//     date: "Nov 11",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: Sarco,
//     imageLabel: "Image Text",
//   },
// ];

// // const posts = [post1, post2, post3];

// const sidebar = {
//   title: "About",
//   description:
//     "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
//   archives: [
//     { title: "March 2020", url: "#" },
//     { title: "February 2020", url: "#" },
//     { title: "January 2020", url: "#" },
//     { title: "November 1999", url: "#" },
//     { title: "October 1999", url: "#" },
//     { title: "September 1999", url: "#" },
//     { title: "August 1999", url: "#" },
//     { title: "July 1999", url: "#" },
//     { title: "June 1999", url: "#" },
//     { title: "May 1999", url: "#" },
//     { title: "April 1999", url: "#" },
//   ],
//   social: [
//     { name: "GitHub", icon: GitHubIcon },
//     { name: "Twitter", icon: TwitterIcon },
//     { name: "Facebook", icon: FacebookIcon },
//   ],
// };

// const theme = createTheme({
//   palette: {
//     background: {
//       default: "#3d424b",
//     },
//     text: {
//       primary: "#f5f5f5",
//     },
//   },
//   typography: {
//     h4: {
//       fontWeight: 600,
//       fontSize: "2rem",
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//     },
//     body1: {
//       fontSize: "1.1rem",
//     },
//     body2: {
//       fontSize: "1rem",
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: "none",
//         },
//       },
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           padding: "1rem",
//           backgroundColor: "#2c3139",
//           borderRadius: "8px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         },
//       },
//     },
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           "&:hover": {
//             textDecoration: "none",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           transition: "0.3s",
//           "&:hover": {
//             transform: "scale(1.02)",
//           },
//         },
//       },
//     },
//     MuiListItemIcon: {
//       styleOverrides: {
//         root: {
//           minWidth: "auto",
//           marginRight: "0.5rem",
//         },
//       },
//     },
//   },
// });

// export default function Blog() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Header title="Blog" sections={sections} />
//         <main>
//           <MainFeaturedPost post={mainFeaturedPost} />
//           <Grid container spacing={4}>
//             {featuredPosts.map((post) => (
//               <FeaturedPost key={post.title} post={post} />
//             ))}
//           </Grid>
//           <Grid container spacing={5} sx={{ mt: 3 }}>
//             {/* <Main title="From the firehose"  /> posts={posts} */}
//             <Sidebar
//               title={sidebar.title}
//               description={sidebar.description}
//               archives={sidebar.archives}
//               social={sidebar.social}
//             />
//           </Grid>
//         </main>
//       </Container>
//       <Footer
//         title="Footer"
//         description="Something here to give the footer a purpose!"
//       />
//     </ThemeProvider>
//   );
// }

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Header";
import MainFeaturedPost from "./Components/MainFeaturedPost";
import FeaturedPost from "./Components/FeaturedPost";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Sarco from "./Sarcophagus.jpg";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Fag El-Gamous",
  description:
    "Discover the mysteries of Fag El-Gamous, an ancient burial site unveiling the secrets of a forgotten civilization.",
  image: Sarco,
  imageText: "Golden Sarcophagus",
  linkText: "",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: Sarco,
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: Sarco,
    imageLabel: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

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

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose"  /> posts={posts} */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
