import React, { Component } from "react";
import { Copyright } from "./login";
import Box from "@material-ui/core/Box";

class signup extends Component {
  render() {
    return (
      <div>
        <h1>SignUp Page</h1>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    );
  }
}

export default signup;
