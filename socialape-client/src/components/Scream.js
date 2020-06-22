import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "react-router-dom/Link";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  card: {
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
    } = this.props;
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
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              color="textSecondary"
            >
              {createdAt}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {body}
            </Typography>
          </CardContent>
          {/* </CardActionArea> */}
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Scream);
