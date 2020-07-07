import React, { Component } from "react";
import { Copyright } from "../App";
import PropTypes from "prop-types";

//MUI Stuff
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";

//Components
import Scream from "../components/scream/Scream";
import Profile from "../components/profile/Profile";

//Redux
import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";
class home extends Component {
  componentDidMount() {
    this.props.getScreams();
  }

  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <p>Loading ....</p>
    );

    return (
      <div className="container">
        <Grid container spacing={8}>
          <Grid item sm={4} xs={12}>
            <Profile />
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

home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getScreams })(home);
