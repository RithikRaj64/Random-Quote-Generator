import React from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  const paperstyle = {
    height: "70vh",
    width: 500,
    margin: "0 auto",
    padding: "5px",
  };

  return (
    <Box>
      <Grid>
        <Paper style={paperstyle}>
          <Grid align="center">
            <Typography>Hello center</Typography>
          </Grid>
          <Grid align="left">
            <Typography>Hello left</Typography>
          </Grid>
          <Grid align="right">
            <Typography>Hello right</Typography>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}

export default App;
