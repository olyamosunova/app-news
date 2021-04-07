import React from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/Main";
import Story from "../story/Story";
import {useDispatch} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";

function App() {
    const dispatch = useDispatch();

    const renderStoryPage = (match) => {
        const id = Number(match.params.id);
        dispatch(ActionCreator.getStory(id));

        return (
            <Story />
        );
    };

  return (
      <BrowserRouter>
          <div className="container">
              <Switch>
                  <Route path="/" component={Main} exact={true} />
                  <Route
                      exact path={`/story/:id`}
                      render={({match}) => renderStoryPage(match)}
                  />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
