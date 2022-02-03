import {useState, useEffect} from "react";
import {Link as RouterLink} from "react-router-dom";
import {useApolloClient} from "@apollo/client";
import NavMenuMobile from "./NavMenuMobile";
import UserMenuMobile from "./UserMenuMobile";
import UserMenuDesktop from "./UserMenuDesktop";
import SearchBar from "./SearchBar";
import DarkModeSwitch from "./DarkModeSwitch";
import {useAuthContext} from "../context/auth";

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  Container,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import {useNavStyles} from "../styles/muiStyles";
import {useTheme} from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";

const NavBar = () => {
  const {user, logoutUser} = useAuthContext();
  const [searchOpen, setSearchOpen] = useState(false);
  const client = useApolloClient();
  const classes = useNavStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    if (!isMobile && searchOpen) {
      setSearchOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const handleLogout = () => {
    logoutUser();
    client.resetStore();
  };

  return (
    <AppBar position='sticky' color='inherit' elevation={1} className={classes.appBar}>
      <Toolbar variant='dense' disableGutters={isMobile}>
        {!searchOpen && (
          <Container disableGutters className={classes.contentContainer}>
            <div className={classes.leftPortion}>
              <div className={classes.logoWrapper}>
                {isMobile && <NavMenuMobile />}
                {isMobile ? (
                  <IconButton className={classes.logo} component={RouterLink} to='/'>
                    
                  </IconButton>
                ) : (
                  <Button className={classes.logo} component={RouterLink} to='/' size='large'>
                    <img src={SofLogo} width='28px' alt='sof-logo' style={{marginRight: "5px"}} />
                    <strong>M</strong>Peace
                  </Button>
                )}
              </div>
              {!isMobile && <SearchBar />}
            </div>
            {isMobile ? (
              <>
                <IconButton
                  color='primary'
                  className={classes.searchBtn}
                  onClick={() => setSearchOpen((prevState) => !prevState)}
                >
                  <SearchIcon />
                </IconButton>
                <DarkModeSwitch />
                <UserMenuMobile user={user} logoutUser={handleLogout} />
              </>
            ) : (
              <>
                <UserMenuDesktop user={user} logoutUser={handleLogout} />
                <DarkModeSwitch />
              </>
            )}
          </Container>
        )}
        {searchOpen && isMobile && <SearchBar isMobile={isMobile} setSearchOpen={setSearchOpen} />}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
