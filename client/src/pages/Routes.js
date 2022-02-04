import {Switch, Route, Redirect} from "react-router-dom";
import NavMenuDesktop from "../components/NavMenuDesktop";
import RightSidePanel from "../components/RightSidePanel";
import QuesListPage from "./QuesListPage";
import AllTagsPage from "./AllTagsPage";
import QuestionPage from "./QuestionPage";
import AskQuestionPage from "./AskQuestionPage";
import UserPage from "./UserPage";
import NotFoundPage from "./NotFoundPage";
import {useAuthContext} from "../context/auth";

import {Container, Grid} from "@material-ui/core";

const Routes = () => {
  const {user} = useAuthContext();

  return (
    <Container disableGutters>
      <Grid container direction='row' wrap='nowrap' justifyContent='space-between'>
        <Switch>
          <Route exact path='/'>
            <NavMenuDesktop user={user} />
            <QuesListPage />
            <RightSidePanel />
          </Route>
          <Route exact path='/ask'>
            {user ? (
              <>
                <NavMenuDesktop user={user} />
                <AskQuestionPage />
                <RightSidePanel />
              </>
            ) : (
              <Redirect to='/' />
            )}
          </Route>
          <Route exact path='/tags'>
            <NavMenuDesktop user={user} />
            <AllTagsPage />
          </Route>
          <Route exact path='/user/:username'>
            <NavMenuDesktop user={user} />
            <UserPage />
          </Route>
          <Route exact path='/questions/:quesId'>
            <NavMenuDesktop user={user} />
            <QuestionPage />
          </Route>
          <Route exact path='/tags/:tagName'>
            <NavMenuDesktop user={user} />
            <QuesListPage tagFilterActive={true} />
            <RightSidePanel />
          </Route>
          <Route exact path='/search/:query'>
            <NavMenuDesktop user={user} />
            <QuesListPage searchFilterActive={true} />
            <RightSidePanel />
          </Route>
          <Route>
            <NavMenuDesktop user={user} />
            <NotFoundPage />
            <RightSidePanel />
          </Route>
        </Switch>
      </Grid>
    </Container>
  );
};

export default Routes;
