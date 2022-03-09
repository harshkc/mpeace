import {ReactComponent as UpvoteIcon} from "../svg/upvote.svg";
import {ReactComponent as DownvoteIcon} from "../svg/downvote.svg";

import {Checkbox, SvgIcon} from "@material-ui/core";
import {useVoteBtnsStyles} from "../styles/muiStyles";

export const UpvoteButton = ({checked, handleUpvote, isDisabled = false}) => {
  const classes = useVoteBtnsStyles();

  return (
    <Checkbox
      style={isDisabled ? {pointerEvents: "none"} : null}
      checked={checked}
      icon={
        <SvgIcon className={classes.icon}>
          <UpvoteIcon />
        </SvgIcon>
      }
      checkedIcon={
        <SvgIcon className={classes.checkedIcon}>
          <UpvoteIcon />
        </SvgIcon>
      }
      onChange={handleUpvote}
    />
  );
};

export const DownvoteButton = ({checked, handleDownvote, isDisabled = false}) => {
  const classes = useVoteBtnsStyles();

  return (
    <Checkbox
      style={isDisabled ? {pointerEvents: "none"} : null}
      checked={checked}
      icon={
        <SvgIcon className={classes.icon}>
          <DownvoteIcon />
        </SvgIcon>
      }
      checkedIcon={
        <SvgIcon className={classes.checkedIcon}>
          <DownvoteIcon />
        </SvgIcon>
      }
      onChange={handleDownvote}
    />
  );
};
