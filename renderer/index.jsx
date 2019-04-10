//ReactDOM utilities for DOM manipulation
import * as ReactDOM from "react-dom";
//Load react library
import * as React from "react";

import {RootComponent} from "./rootComponent";

ReactDOM.render(
   <RootComponent />,
    document.getElementById('root')
);