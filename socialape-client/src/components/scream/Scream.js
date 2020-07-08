import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import BtnStructure from "../../util/BtnStructure";
import DeleteScream from "./DeleteScream";
import ScreamDialog from "./ScreamDialog";
import LikeButton from "./LikeButton";

//Redux
import { connect } from "react-redux";
//MUI stuff
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//Icons
import ChatIcon from "@material-ui/icons/Chat";

const styles = (theme) => ({
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
});

class Scream extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    //Delete Button
    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteScream screamId={screamId} />
      ) : null;
    return (
      <div>
        <Card className={classes.card}>
          {/* <CardActionArea> */}
          <CardMedia
            className={classes.image}
            image={userImage}
            title="Profile Image"
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component={Link}
              to={`/users/${userHandle}`}
              color="primary"
            >
              {userHandle}
            </Typography>
            {deleteButton}
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              color="textSecondary"
            >
              {dayjs(createdAt).fromNow()}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {body}
            </Typography>
            <LikeButton screamId={screamId} />
            <span>{likeCount} Likes</span>
            <BtnStructure tip="Comments">
              <ChatIcon color="primary" />
            </BtnStructure>
            <span>{commentCount} comments</span>
            <ScreamDialog
              screamId={screamId}
              userHandle={userHandle}
              openDialog={this.props.openDialog}
            />
          </CardContent>
          {/* </CardActionArea> */}
        </Card>
      </div>
    );
  }
}

Scream.propTypes = {
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Scream));
