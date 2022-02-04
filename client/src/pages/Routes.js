import {Switch, Route, Redirect} from "react-router-dom";
import NavMenuDesktop from "../components/NavMenuDesktop";
import QuesListPage from "./QuesListPage";
import QuestionPage from "./QuestionPage";
import AskQuestionPage from "./AskQuestionPage";
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
          </Route>
          <Route exact path='/ask'>
            {user ? (
              <>
                <NavMenuDesktop user={user} />
                <AskQuestionPage />
              </>
            ) : (
              <Redirect to='/' />
            )}
          </Route>
          <Route exact path='/questions/:quesId'>
            <NavMenuDesktop user={user} />
            <QuestionPage />
          </Route>
          <Route exact path='/search/:query'>
            <NavMenuDesktop user={user} />
            <QuesListPage searchFilterActive={true} />
          </Route>
          <Route>
            <NavMenuDesktop user={user} />
            <NotFoundPage />
          </Route>
        </Switch>
      </Grid>
    </Container>
  );
};

export default Routes;
