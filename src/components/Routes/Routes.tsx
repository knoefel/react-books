import { LinearProgress } from "@material-ui/core";
import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NetworkError, NetworkErrorBoundary } from "rest-hooks";
import BookListContainer from "../../containers/BookListContainer/BookListContainer";

const Fallback = () => <LinearProgress />;

const ErrorPage = ({ error }: { error: NetworkError }) => (
  <div>
    {error.status} {error.response && error.response.statusText}
  </div>
);

export const Router = () => (
  <Suspense fallback={<Fallback />}>
    <NetworkErrorBoundary fallbackComponent={ErrorPage}>
      <Switch>
        <Route path="/books">
          <BookListContainer />
        </Route>
        <Route exact path="/" render={() => <Redirect to="/books" />} />
      </Switch>
    </NetworkErrorBoundary>
  </Suspense>
);
