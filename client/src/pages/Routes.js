import {Switch, Route, Redirect} from "react-router-dom";
import QuesListPage from "./QuesListPage";
import AskQuestionPage from "./AskQuestionPage";
import {useAuthContext} from "../context/auth";

import {Container, Grid} from "@material-ui/core";

const Routes = () => {
  const {user} = useAuthContext();

  return (
    <Container disableGutters>
      <Grid container direction='row' wrap='nowrap' justifyContent='space-between'>
        <Switch>
          <Route exact path='/'>
            <QuesListPage />
          </Route>
          <Route exact path='/ask'>
            {user ? (
              <>
                <AskQuestionPage />
              </>
            ) : (
              <Redirect to='/' />
            )}
          </Route>
        </Switch>
      </Grid>
    </Container>
  );
};

export default Routes;
