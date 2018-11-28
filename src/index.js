import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import configureStore from "./redux/store/configureStore";

const store = configureStore();


const jsx =  (
    <Provider store={store}>
      <p>React-Redux Setup Project</p>
    </Provider>
  );

ReactDOM.render(jsx, document.getElementById("root"))