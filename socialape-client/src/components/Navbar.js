import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BtnStructure from "../util/BtnStructure";
import PostScream from "./PostScream";

//Redux
import { connect } from "react-redux";

//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import Notifications from "@material-ui/icons/Notifications";

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            {authenticated ? (
              <Fragment>
                <PostScream />
                <Link to="/">
                  <BtnStructure tip="Home">
                    <HomeIcon />
                  </BtnStructure>
                </Link>
                <BtnStructure tip="Notifications">
                  <Notifications />
                </BtnStructure>
              </Fragment>
            ) : (
              <Fragment>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Signup
                </Button>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propType = {
  authenticated: PropTypes.bool.required,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
