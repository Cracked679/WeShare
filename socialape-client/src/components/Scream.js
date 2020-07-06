import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import BtnStructure from "../util/BtnStructure";
import DeleteScream from "./DeleteScream";
import ScreamDialog from "./ScreamDialog";

//Redux
import { connect } from "react-redux";
import { likeScream, unlikeScream } from "../redux/actions/dataActions";

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
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.screamId === this.props.scream.screamId
      )
    )
      return true;
    else return false;
  };

  likeScream = () => {
    this.props.likeScream(this.props.scream.screamId);
  };

  unlikeScream = () => {
    this.props.unlikeScream(this.props.scream.screamId);
  };

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

    //Like Button
    const likeButton = !authenticated ? (
      <BtnStructure tip="Like">
        <Link to="/login">
          <FavoriteBorder color="primary" />
        </Link>
      </BtnStructure>
    ) : this.likedScream() ? (
      <BtnStructure tip="Undo Like" onClick={this.unlikeScream}>
        <FavoriteIcon color="primary" />
      </BtnStructure>
    ) : (
      <BtnStructure tip="Like" onClick={this.likeScream}>
        <FavoriteBorder color="primary" />
      </BtnStructure>
    );

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
            {likeButton}
            <span>{likeCount} Likes</span>
            <BtnStructure tip="Comments">
              <ChatIcon color="primary" />
            </BtnStructure>
            <span>{commentCount} comments</span>
            <ScreamDialog screamId={screamId} userHandle={userHandle} />
          </CardContent>
          {/* </CardActionArea> */}
        </Card>
      </div>
    );
  }
}

Scream.propTypes = {
  likeScream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeScream,
  unlikeScream,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Scream));
