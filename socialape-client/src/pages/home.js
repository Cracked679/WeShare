import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Copyright } from "./login";
import Box from "@material-ui/core/Box";

import Scream from "../components/Scream";
class home extends Component {
  state = {
    screams: null,
  };

  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map((scream) => (
        <Scream key={scream.screamId} scream={scream} />
      ))
    ) : (
      <p>Loading ....</p>
    );
    return (
      <div className="container">
        <Grid container spacing={8}>
          <Grid item sm={4} xs={12}>
            <p>Profile...</p>
          </Grid>
          <Grid item sm={8} xs={12}>
            {recentScreamsMarkup}
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    );
  }
}

export default home;
