import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { FormattedMessage } from "react-intl";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing.unit / 2
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});
class NameTags extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getText = this.getText.bind(this);
  }

  getText(data) {
    return (
      <>
        <FormattedMessage id="greeting" /> &nbsp; {data}{" "}
      </>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        {this.props.tags.map((data, index) => {
          return (
            <>
              <Chip
                key={index}
                label={this.getText(data)}
                className={classes.chip}
              />
            </>
          );
        })}
      </Paper>
    );
  }
}
NameTags.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NameTags);
