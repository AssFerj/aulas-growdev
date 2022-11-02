import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const Contact: React.FC = () => {

  return (
    <>
        <ResponsiveAppBar/>
        <Container maxWidth="lg" sx={{
          backgroundColor: "bisque",
          paddingBottom: "20px",
          marginTop: "50px",
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" gutterBottom>
                Contact
              </Typography>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
              </Typography>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
              </Typography>
            </Grid>
          </Grid>
        </Container>
    </>
  )
};

export default Contact;
