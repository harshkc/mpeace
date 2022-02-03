import {useLocation, Link as RouterLink} from "react-router-dom";

import {MenuItem, useMediaQuery, Divider, Grid} from "@material-ui/core";
import {useMenuStyles} from "../styles/muiStyles";
import {useTheme} from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import ProfileIcon from "@material-ui/icons/Person";

const DesktopNavMenu = ({user} = {}) => {
  const {pathname} = useLocation();
  const classes = useMenuStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  if (isMobile) return null;

  return (
    <Grid item>
      <div className={classes.rootPanel}>
        <div className={classes.list}>
          <MenuItem
            selected={pathname === "/" || (!pathname.startsWith("/tag") && !pathname.startsWith("/user"))}
            component={RouterLink}
            className={classes.menuItem}
            to='/'
          >
            <PublicIcon className={classes.menuIcon} />
            Home
          </MenuItem>
          <MenuItem
            selected={pathname.startsWith("/tag")}
            component={RouterLink}
            className={classes.menuItem}
            to='/tags'
          >
            <LocalOfferIcon className={classes.menuIcon} />
            Tags
          </MenuItem>
          <MenuItem
            selected={pathname === "/users"}
            component={RouterLink}
            className={classes.menuItem}
            to='/users'
          >
            <PeopleIcon className={classes.menuIcon} />
            Users
          </MenuItem>
          {user && (
            <MenuItem
              selected={pathname.startsWith(`/user/${user.username}`)}
              component={RouterLink}
              className={classes.menuItem}
              to={`/user/${user.username}`}
            >
              <ProfileIcon className={classes.menuIcon} />
              Profile
            </MenuItem>
          )}
        </div>
        <Divider orientation='vertical' flexItem />
      </div>
    </Grid>
  );
};

export default DesktopNavMenu;
